import { Router } from "express";
import {
  deleteStudentInformation,
  getAdminDocument,
  getAllAgentStudent,
  getAllAgentStudentAdmin,
  // getAllStudents,
  // getStudentDetails,
  getStudentFormById,
  getStudentPersonalInformation,
  studentPersonalInformation,
  studentPersonalInformationEdit,
  studentPreference,
  studentResidenceAndAddress,
  updateStudentPersonalInformation,
  updateStudentStatus,
} from "../controllers/studentInformation.controller.js";
import { verifyAdmin, verifyJwt } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
const router = Router();

router.route("/personal-information").post(
  verifyJwt, // Make sure the field name matches your form's file input name
  studentPersonalInformation
);
router
  .route("/residence-address/:formId")
  .patch(verifyJwt, studentResidenceAndAddress);
router
  .route("/residence-address-admin/:formId")
  .patch(verifyAdmin, studentResidenceAndAddress);
router.route("/preference/:formId").patch(verifyJwt, studentPreference);
router.route("/preference-admin/:formId").patch(verifyAdmin, studentPreference);
router.route("/remove-student/:id").delete(verifyJwt, deleteStudentInformation);
router
  .route("/personal-information/:studentId")
  .get(verifyJwt, getStudentPersonalInformation);

router
  .route("/personal-information/:formId")
  .patch(verifyJwt, updateStudentPersonalInformation);
router
  .route("/personal-information-admin/:formId")
  .patch(verifyAdmin, updateStudentPersonalInformation);
router.route("/agent-student").get(verifyJwt, getAllAgentStudent);
router.route("/agent-student-admin").get(verifyAdmin, getAllAgentStudentAdmin);
router.route("/student-information/:formId").get(verifyJwt, getStudentFormById);
router
  .route("/student-information/:id")
  .delete(verifyJwt, deleteStudentInformation);
router
  .route("/personal-information/:id")
  .patch(verifyJwt, studentPersonalInformationEdit);
  router.route("/admin-document/:studentId").get( getAdminDocument)  
router
  .route("/update-student-reapproval-status/:studentId")
  .put(verifyJwt, updateStudentStatus);

  
export default router;
