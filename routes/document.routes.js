import { Router } from "express";
import { deleteDocument, deleteDocumentByUrl, getAllDocumentOnce, getAllDocuments, getSingleDocument, uploadDocument } from "../controllers/document.controller.js";
import { verifyAdmin, verifyJwt } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/upload").post(uploadDocument);
router.route("/all/:userId").get(verifyJwt, getAllDocuments);
router.route("/all-doc/:userId").get(verifyJwt, getAllDocumentOnce);
router.route("/all-admin").get(verifyAdmin, getAllDocuments);
router.route("/:id").get(verifyJwt, getSingleDocument);
router.route("/:id").delete(verifyJwt, deleteDocument);
router.route("/delete-document").patch(verifyJwt, deleteDocumentByUrl);

export default router;