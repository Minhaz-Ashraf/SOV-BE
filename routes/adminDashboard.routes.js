import { Router } from "express";
import { verifyAdmin } from "../middlewares/auth.middleware.js";
import { changeApplicationStatus, changeApplicationStatusSubadmin, changeStudentInformationStatus, changeStudentInformationStatusSubadmin, deleteAgent, deleteStudentInformation, getAllAgent, getAllApplications, getAllApplicationsForSubadmin, getAllDataAgentStudent, getAllDataAgentStudentForSubadmin, getAllStudentApplications, getAllStudents, getApplicationMonthlyCount, getCompanyData, getTotalAgentsCount, getTotalApplicationCount, getTotalApplicationOverviewForAdmin, getTotalStudentCount, getTotalTicketCount, getTotalUsersCount, updatePageStatus, uploadDocument, downloadAllStudentsAsCSV, downloadAllAgentsAsCSV, downloadAllApplicationsAsCSV, deleteAdminDocumentByUrl, getRecievedDocument } from "../controllers/adminDashboard.controller.js";
import { deleteStudentData , getStudentFormById } from "../controllers/studentInformation.controller.js";
import { updateVisaStatus } from "../controllers/institution.controller.js";
const router = Router();


router.route("/agent-count").get(verifyAdmin, getTotalAgentsCount);
router.route("/student-count").get(verifyAdmin, getTotalStudentCount);
router.route("/change-student-information-status/:studentInformationId").patch(verifyAdmin, changeStudentInformationStatus);
router.route("/all/applications").get(verifyAdmin, getAllApplications)
router.route("/change-application-status/:institutionId").patch(changeApplicationStatus)
router.route("/all/student-agent-data").get(verifyAdmin, getAllDataAgentStudent)
router.route("/agent/:id").patch(verifyAdmin, getAllDataAgentStudent)
router.route("/change-page-status/:id").patch(verifyAdmin, updatePageStatus)
router.route("/company/:id").get( getCompanyData)
router.route("/student-information/:formId").get(verifyAdmin, getStudentFormById)
router.route("/application-count").get(verifyAdmin, getTotalApplicationCount)
router.route("/ticket-count").get(verifyAdmin, getTotalTicketCount)
router.route("/student-directory").get(verifyAdmin, getAllStudents)  
router.route("/remove-student/:id").patch(verifyAdmin, deleteStudentInformation)  
router.route("/upload-document").post(verifyAdmin, uploadDocument)  
router.route("/get-admin-document").get(getRecievedDocument)
router.route("/all-agent").get(verifyAdmin, getAllAgent)  
router.route("/delete-agent/:agentId").patch(verifyAdmin, deleteAgent) 
router.route("/all-student-applications").get(verifyAdmin, getAllStudentApplications)  
router.route("/visa-status/:id").patch(verifyAdmin, updateVisaStatus)  
router.route("/sub-admin/applications/:teamId").get(verifyAdmin, getAllApplicationsForSubadmin)
router.route("/sub-admin/student-agent-data/:teamId").get(verifyAdmin, getAllDataAgentStudentForSubadmin)
router.route("/change-application-status-subadmin/:institutionId").patch(verifyAdmin, changeApplicationStatusSubadmin)
router.route("/change-student-information-status-subadmin/:studentInformationId").patch(verifyAdmin, changeStudentInformationStatusSubadmin);
router.route("/user-monthly-counts").get(verifyAdmin, getTotalUsersCount)  
router.route("/total-application-overview-admin").get(verifyAdmin, getTotalApplicationOverviewForAdmin)  
router.route("/total-application-monthly-count").get(verifyAdmin, getApplicationMonthlyCount)  
router.route("/total-student-download").get(verifyAdmin, downloadAllStudentsAsCSV)  
router.route("/total-agent-download").get(verifyAdmin, downloadAllAgentsAsCSV)  
router.route("/total-application-download").get(verifyAdmin, downloadAllApplicationsAsCSV)
router.route("/delete-admin-document").patch(verifyAdmin, deleteAdminDocumentByUrl)
router.route("/delete-agent/:agentId").patch(verifyAdmin, deleteAgent)
router.route("/delete-student/:id").patch(verifyAdmin, deleteStudentData);


export default router;