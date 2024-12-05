import mongoose, { Schema } from 'mongoose';

// Schema for Document
const DocumentSchema = new Schema({
    documentName: { 
        type: String, 
        required: true 
    },  // Name of the document
    viewUrl: { 
        type: String, 
        required: true 
    },  // URL or path to view the document
     userId: {
        type: String
        
     }
}, {
    timestamps: true  // Automatically adds createdAt and updatedAt fields
});

// Model creation
export const Document = mongoose.model("Document", DocumentSchema);
