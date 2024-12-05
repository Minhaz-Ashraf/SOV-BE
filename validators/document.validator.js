import { z } from 'zod';

// Zod schema for Document
export const DocumentUploadSchema = z.object({
  documentName: z.string().nonempty("Document name is required"),  // Required document name
  viewUrl: z.string().nonempty("View URL is required")
});

export const adminDocumentSchema = z.object({
  document: z.array(z.string()), 
  studentId: z.string(),
  applicationId: z.string(),
  documentName: z.string().nonempty("Document name is required"),
});