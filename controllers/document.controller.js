import { Document } from "../models/document.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { DocumentUploadSchema } from "../validators/document.validator.js";



const uploadDocument = asyncHandler(async (req, res) => {
    const { body: payload } = req;

    // Validate the payload using Zod schema
    const validation = DocumentUploadSchema.safeParse(payload);
    if (!validation.success) {
        return res.status(400).json(new ApiResponse(400, {}, validation.error.errors));
    }

    // Assuming user ID is provided in the request
    const userId = payload.userId;

    // Create a new document
    const newDocument = await Document.create({
        documentName: payload.documentName,
        viewUrl: payload.viewUrl,
        userId: userId  // Assign the userId from the authenticated user
    });

    // Return success response with the created document excluding the __v field
    const createdDocument = await Document.findById(newDocument._id).select('-__v').exec();

    return res.status(201).json(new ApiResponse(201, createdDocument, "Document uploaded successfully"));
});

const getAllDocuments = asyncHandler(async (req, res) => {
    // Assuming userId is passed as a route parameter
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    const andConditions = []
    if(req.params && req.user.role !== "0"){
        const userId = req.params.userId;
        if(!userId){
            return res.status(400).json(new ApiResponse(400, {}, "User ID is required"));
        }
        andConditions.push({userId});
    }


    if (req.query.searchQuery) {
        const regex = { $regex: req.query.searchQuery, $options: "i" }; // Case-insensitive search
        andConditions.push({
          $or: [
            { "documentName": regex },
          ],
        });
    }

    const query = andConditions.length > 0 ? {$and: andConditions} : {};

    const totalDocuments = await Document.countDocuments(query);
    const totalPages = Math.ceil(totalDocuments / limit);

    // Fetch all documents for the given userId
    const documents = await Document.find(query).select("-__v")
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean();

    // Check if documents were found
    if (documents.length === 0) {
        return res.status(404).json(new ApiResponse(404, {}, "No documents found for this user"));
    }

    // Return success response with the list of documents
    return res.status(200).json(new ApiResponse(200, {
        total: totalDocuments,
        currentPage: page,
        previousPage: page > 1 ? page - 1 : null,
        nextPage: page < totalPages ? page + 1 : null,
        totalPages,
        limit,
        documents: documents,
      }, "Documents retrieved successfully"));
});




const getAllDocumentOnce = asyncHandler(async (req, res) => {
    // Assuming userId is passed as a route parameter
    const andConditions = [];

    if (req.params && req.user.role !== "0") {
        const userId = req.params.userId;
        if (!userId) {
            return res.status(400).json(new ApiResponse(400, {}, "User ID is required"));
        }
        andConditions.push({ userId });
    }

    if (req.query.searchQuery) {
        const regex = { $regex: req.query.searchQuery, $options: "i" }; // Case-insensitive search
        andConditions.push({
            $or: [
                { "documentName": regex },
            ],
        });
    }

    const query = andConditions.length > 0 ? { $and: andConditions } : {};

    // Fetch all documents for the given query
    const documents = await Document.find(query).select("-__v")
        .sort({ createdAt: -1 })
        .lean();

    // Check if documents were found
    if (documents.length === 0) {
        return res.status(404).json(new ApiResponse(404, {}, "No documents found for this user"));
    }

    // Return success response with the list of documents
    return res.status(200).json(new ApiResponse(200, {
        total: documents.length,
        documents,
    }, "Documents retrieved successfully"));
});

const getSingleDocument = asyncHandler(async (req, res) => {
    const { id } = req.params; // Get the document ID from the request parameters

    // Find the document by ID
    const document = await Document.findById(id);

    // Check if the document was found
    if (!document) {
        return res.status(404).json(new ApiResponse(404, {}, "Document not found"));
    }

    // Return success response with the document
    return res.status(200).json(new ApiResponse(200, document, "Document retrieved successfully"));
});

const deleteDocument = asyncHandler(async (req, res) => {
    const { id } = req.params; // Get the document ID from the request parameters

    // Find the document by ID and delete it
    const deletedDocument = await Document.findByIdAndDelete(id);

    // Check if the document was found and deleted
    if (!deletedDocument) {
        return res.status(404).json(new ApiResponse(404, {}, "Document not found"));
    }

    // Return success response
    return res.status(200).json(new ApiResponse(200, {}, "Document deleted successfully"));
});


const deleteDocumentByUrl = asyncHandler(async (req, res) => {
    const { fileUrl } = req.body;

    const deletedDocument = await Document.findOneAndDelete({ viewUrl: fileUrl});

    if (!deletedDocument) {
        return res.status(404).json(new ApiResponse(404, {}, "Document not found"));
    }

    return res.status(200).json(new ApiResponse(200, {}, "Document deleted successfully"));
});

export {uploadDocument, getAllDocuments, getSingleDocument, deleteDocument, deleteDocumentByUrl, getAllDocumentOnce}