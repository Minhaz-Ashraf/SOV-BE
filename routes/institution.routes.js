import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { applicationOverview, createInstitutionVisa, editCertificate, editEducationDetails, editIELTSScore, editOfferLetterAnsPassport, editParentDocument, editPersonalInformation, editPreferences, editPTEScore, editStudentDocument, editTOEFLScore, getAgentVisa, getAllApplications, getApplicationById, getStudentAllApplications, getStudentApplicationInfo, getVisaDocuments, registerCourseFeeApplication, registerGIC, registerOfferLetter, reSubmitApplication, updateVisaDocuments, updateVisaPersonalDetails, updateVisaStatus } from "../controllers/institution.controller.js";
import { changeApplicationStatus, getVisaDetails, updateVisaDetails } from "../controllers/adminDashboard.controller.js";
const router = Router();

router.route("/register-offerletter").post( verifyJwt, registerOfferLetter);
router.route("/register-gic").post( verifyJwt, registerGIC);
router.route("/all").get( verifyJwt, getAllApplications);
router.route("/course-fee-application").post( verifyJwt, registerCourseFeeApplication);
router.route("/application-overview").get( verifyJwt, applicationOverview);
router.route("/personal-information/:applicationId").patch( verifyJwt, editPersonalInformation);
router.route("/education-details/:applicationId").patch( verifyJwt, editEducationDetails);
router.route("/preference/:applicationId").patch( verifyJwt, editPreferences);
router.route("/ielts-score/:applicationId").patch( verifyJwt, editIELTSScore);
router.route("/ptl-score/:applicationId").patch( verifyJwt, editPTEScore);
router.route("/toefl-score/:applicationId").patch( verifyJwt, editTOEFLScore);
router.route("/certificate/:applicationId").patch( verifyJwt, editCertificate);
router.route("/student-document/:applicationId").patch( verifyJwt, editStudentDocument);
router.route("/parent-document/:applicationId").patch( verifyJwt, editParentDocument);
router.route("/offer-letter-and-passport/:applicationId").patch( verifyJwt, editOfferLetterAnsPassport);
router.route("/application/:id").get( getApplicationById);
router.route("/application-application/:studentInformationId").get( getStudentAllApplications);
router.route("/reSubmit-application/:id").patch( verifyJwt, reSubmitApplication);
router.route("/student-application-info/:studentId").get( verifyJwt, getStudentApplicationInfo);
router.route("/create-visa").post( verifyJwt, createInstitutionVisa);
router.route("/visa-personaldetails/:id").patch( verifyJwt, updateVisaPersonalDetails);
router.route("/visa-documents/:id").patch( verifyJwt, updateVisaDocuments);
router.route("/get-visa-documents/:studentId").get(getVisaDocuments);
router.route("/get-visa-details/:applicationId").get( getVisaDetails);  //ppr get
router.route("/update-visa-document/:applicationId").post( updateVisaDetails);
router.route("/visa-status-by-agent/:id").patch(verifyJwt, updateVisaStatus); 
router.route("/all-agent-visa/").get(verifyJwt, getAgentVisa);  
router.route("/change-application-status/:institutionId").patch(verifyJwt, changeApplicationStatus);






export default router;