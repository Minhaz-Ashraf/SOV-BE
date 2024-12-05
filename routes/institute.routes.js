import { Router } from "express";
import { addInstitute, deleteInstitute, downloadAllInstitutesAsCSV, editInstitute, getAllInstitute } from "../controllers/institute.controller.js";
import { verifyAdmin } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/all").get( getAllInstitute);
router.route("/download-all").get( downloadAllInstitutesAsCSV);
router.route("/add").post( verifyAdmin, addInstitute);
router.route("/update/:id").patch( verifyAdmin, editInstitute);
router.route("/delete/:id").patch( verifyAdmin, deleteInstitute);




export default router;