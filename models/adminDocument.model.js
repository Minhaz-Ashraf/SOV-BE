import mongoose, { Schema } from 'mongoose';

const adminDocumentSchema = new Schema({
    document: { 
        type: [String],
    },  
    studentId: {
       type: String   
    },
    applicationId: {
       type: String   
    },
    documentType: {
       type: String,
       enum: ['offerletter', 'coursefeeApplication', 'visa'],
    },
    documentName:{
        type: String
    }
}, {
    timestamps: true 
});

export const adminDocument = mongoose.model("AdminDocument", adminDocumentSchema);
