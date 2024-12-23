import mongoose, { Schema } from 'mongoose';

// Schema for Address
const AddressSchema = new Schema({
    street: { type: String },
    city: { type: String },
    state: { type: String },
    postalCode: { type: String },
    country: { type: String },
});

// Schema for Personal Information
const PersonalInformationSchema = new Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: AddressSchema,  // Use Address schema for personalInformation and gic.personalDetails
});

// Schema for Education Details
const EducationDetailsSchema = new Schema({
    educationLevel: { 
        type: String, 
        // enum: ['Diploma', 'Post Graduate', 'Under Graduate'], 
        required: true 
    },
    markSheet10: { 
        type: String,  
    },
    markSheet12: { 
        type: String, 
    },
    markSheetUnderGraduate: { 
        type: String,  
    },
    markSheetPostGraduate: { 
        type: String,  
    },
});

// Schema for Preferences
const PreferencesSchema = new Schema({
    country: { type: String, required: true },
    institution: { type: String, required: true },
    course: { type: String, required: true },
    intake: { type: String, required: true },
    offerLetterPrice:{
        type: String,
        // default: "$50"
        required: false,
     }, 
});

// Schema for IELTS Score
const IELTSSchema = new Schema({
    reading: { type: Number },
    speaking: { type: Number },
    writing: { type: Number },
    listening: { type: Number },
    overallBand: { type: Number },
});

// Schema for Document Upload
const DocumentUploadSchema = new Schema({
    offerLetter: { type: String },  // URL or file path to the uploaded offer letter
    feeReceipt: { type: String },  // URL or file path to the uploaded letter of acceptance
    gicLetter: { type: String },  
    medical: { type: String },  
    pcc: { type: String },  
    pal: { type: String },  
    ielts: { type: String },  
});

// Schema for PTE Scores
const PTESchema = new Schema({
    listening: { type: Number, required: false },
    reading: { type: Number, required: false },
    writing: { type: Number, required: false },
    speaking: { type: Number, required: false },
    overallBand: { type: Number, required: false },
}, { _id: false });  // Set _id to false if you don't want separate IDs for embedded sub-documents

// Schema for TOEFL Scores
const TOEFLSchema = new Schema({
    listening: { type: Number, required: false },
    reading: { type: Number, required: false },
    writing: { type: Number, required: false },
    speaking: { type: Number, required: false },
    overallBand: { type: Number, required: false },
}, { _id: false });

// Schema for Document Upload
const CertificateUploadSchema = new Schema({
    url: {
        type: [String],  // Array of strings
    }
}, { _id: false });


const StudentDocumentSchema = new Schema({
    aadharCard: {
        type:String
    },
    panCard: {
        type:String
    }
}, { _id: false });

const ParentDocumentSchema = new Schema({
    fatherAadharCard: {
        type:String
    },
    fatherPanCard: {
        type:String
    },
    motherAadharCard: {
        type:String
    },
    motherPanCard: {
        type:String
    }
}, { _id: false });

const SiblingDocumentSchema = new Schema({
    siblingAadharCard: {
        type:String
    },
    siblingPanCard: {
        type:String
    },
}, { _id: false });

const OfferLetterAnsPassportSchema = new Schema({
    offerLetter: {
        type:String
    },
    passport: {
        type:String
    }
}, { _id: false });


// Main schema for Visa Registration
const InstitutionSchema = new Schema({
    offerLetter: {
        personalInformation: PersonalInformationSchema,
        educationDetails: EducationDetailsSchema,
        preferences: PreferencesSchema,
        ieltsScore: IELTSSchema,
        ptes: PTESchema,
        toefl:TOEFLSchema,
        certificate: CertificateUploadSchema,
        type:{
            type: String,
       
        },
        status: {
            type: String,
            enum: ['underreview', 'rejected', 'approved'],  // Valid status values     
        },
        message: { type: String }  // Optional message field
    },
    // gic: { 
    //     personalDetails: PersonalInformationSchema,  // Embed Personal Details Schema under gic
    //     documentUpload: DocumentUploadSchema,  // Embed Document Upload Schema under gic
    //     type:{
    //         type: String,
    //         default: "GIC"
    //     },
    //     status: {
    //         type: String,
    //         enum: ['underreview','rejected', 'approved'],  // Valid status values
            
    //     },
    //     message: { type: String }  // Optional message field
    // },
    courseFeeApplication:{
        personalDetails: PersonalInformationSchema,
        studentDocument: StudentDocumentSchema,
        parentDocument: ParentDocumentSchema,
        siblingsDocument: SiblingDocumentSchema,
        offerLetterAnsPassport:OfferLetterAnsPassportSchema,
        type:{
            type: String,
        },
        status: {
            type: String,
            enum: ['underreview', , 'rejected', 'approved'],  // Valid status values     
        },
        message: { type: String }
    },
    visa:{
        personalDetails: PersonalInformationSchema,
        country: {
            type: String,
        },
        loa:{
            type: String
        },
        offerLetter: {
            type: String,
        },
        gicLetter: {
            type: String,
        },
        medical: {
            type: String,
        },
        pcc: {
            type: String,
        },
        pal: {
            type: String,
        },
        certificate: {
            type: [String],
            default: undefined,
        },
        lor :{
            type: String,
        },
        sop :{
            type: String,
        },
        blockedaccount : {
            type: String,
        },
        type:{
            type: String,
      
        },
        visaStamp: {
            type: String,
        },
        ppr:{
            type: String,
        },
        status: {
            type: String,
            enum: ['underreview', 'rejected', 'approved', 'approvedbyembassy','rejectedbyembassy', 'withdrawalrequest', 'visagranted', 'withdrawalcomplete', 'deferment'],  // Valid status values     
      
        },
        message: { type: String },
    },
    studentInformationId: {
        type: Schema.Types.ObjectId,
        ref: "StudentInformation",
        required: true
    },
    applicationId: {
        type: String,
        unique: true,
        required: true
    },
    teamId: {
        type: Schema.Types.ObjectId,
        ref: "Admin",
        required: false
    },
    userId: {
        type: String,
        required: true
    },
    deleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true  // Automatically add createdAt and updatedAt fields
});

// Model creation
export const Institution = mongoose.model("Institution", InstitutionSchema);
