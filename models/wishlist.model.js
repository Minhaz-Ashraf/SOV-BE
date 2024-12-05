import mongoose, { Schema } from "mongoose";

// Wishlist Schema
const WishlistSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",  // Assuming you have a User model
    required: true,
  },
  institutes: [{
    instituteId:{
    type: Schema.Types.ObjectId,
    ref: "Institute",  // Reference to the Institute model
    required: true,
  },
  status:{
    type: String
  }
}],
}, {
  timestamps: true,  // Automatically add createdAt and updatedAt fields
});

// Create Wishlist model
export const Wishlist = mongoose.model("Wishlist", WishlistSchema);
