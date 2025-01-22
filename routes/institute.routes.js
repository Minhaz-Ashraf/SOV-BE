import { Router } from "express";
import { addInstitute, deleteInstitute, downloadAllInstitutesAsCSV, editInstitute, getAllInstitute, getAllInstitutes, getInstituteById, getInstitutes } from "../controllers/institute.controller.js";
import { verifyAdmin } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/all").get( getAllInstitute);
router.route("/all-institute").get( getInstitutes);
router.route("/get-all-institute").get( getAllInstitutes);
router.route("/one-institute").get( getInstituteById);
// router.route("/download-all").get( downloadAllInstitutesAsCSV);
router.route("/add").post( verifyAdmin, addInstitute);
router.route("/update/:id").patch( verifyAdmin, editInstitute);
router.route("/delete/:id").patch( verifyAdmin, deleteInstitute);




export default router;