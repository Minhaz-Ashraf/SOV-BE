import { Institute } from "../models/institute.model.js";
import { Wishlist } from "../models/wishlist.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";




const addToWishlist = asyncHandler(async (req, res) => {
  const { instituteId } = req.body;
  const userId = req.user.id;  // Assuming you're getting the user ID from the authenticated user
  
  // Check if the institute exists
  const institute = await Institute.findById(instituteId);
  if (!institute) {
    return res.status(404).json(new ApiResponse(404, {}, "Institute not found"));
  }

  // Find the user's wishlist
  let wishlist = await Wishlist.findOne({ userId });
  
  if (!wishlist) {
    // Create a new wishlist if it doesn't exist and add the institute with status 'added'
    wishlist = new Wishlist({
      userId,
      institutes: [{
        instituteId,
        status: 'added'
      }]
    });
  } else {
    // Check if the institute is already in the wishlist
    const instituteIndex = wishlist.institutes.findIndex(item => 
      item.instituteId.toString() === instituteId
    );

    if (instituteIndex === -1) {
      // If institute not in the wishlist, add it with status 'added'
      wishlist.institutes.push({
        instituteId,
        status: 'added'
      });
    } else {
      // If institute exists, toggle the status between 'added' and 'removed'
      const currentStatus = wishlist.institutes[instituteIndex].status;
      wishlist.institutes[instituteIndex].status = currentStatus === 'added' ? 'removed' : 'added';
    }
  }

  // Save the wishlist
  await wishlist.save();

  return res.status(200).json(
    new ApiResponse(200, wishlist, "Wishlist updated successfully")
  );
});

 const removeFromWishlist = asyncHandler(async (req, res) => {
    const { instituteId } = req.params;
    const userId = req.user.id;  // Assuming you're getting the user ID from the authenticated user
  
    // Find the user's wishlist
    const wishlist = await Wishlist.findOne({ userId });
    if (!wishlist) {
      return res.status(404).json(new ApiResponse(404, {}, "Wishlist not found"));
    }
  
    // Filter out the institute from the wishlist
    wishlist.institutes = wishlist.institutes.filter(id => id.toString() !== instituteId);
    
    // Save the updated wishlist
    await wishlist.save();
  
    return res.status(200).json(
      new ApiResponse(200, wishlist, "Institute removed from wishlist")
    );
  });

  const fetchWishlist = asyncHandler(async (req, res) => {
    const userId = req.user.id;  // Assuming you're getting the user ID from the authenticated user

    // Find the user's wishlist and populate institute details
    const wishlist = await Wishlist.findOne({ userId })
        .populate({
            path: 'institutes.instituteId',  // Populate the institute details
            select: '-__v'  // Exclude __v field if you don't want it
        })
        .exec();

    // If wishlist doesn't exist, return 404
    if (!wishlist) {
        return res.status(404).json(new ApiResponse(404, {}, "Wishlist not found"));
    }

    // Filter institutes where status is "added"
    const filteredInstitutes = wishlist.institutes.filter(institute => institute.status === 'added');

    // If no institutes with status "added", return 404
    if (filteredInstitutes.length === 0) {
        return res.status(404).json(new ApiResponse(404, {}, "No institutes with status 'added' found"));
    }

    // Return the filtered wishlist
    return res.status(200).json(
        new ApiResponse(200, { institutes: filteredInstitutes }, "Wishlist fetched successfully")
    );
})

export {addToWishlist, removeFromWishlist, fetchWishlist}


