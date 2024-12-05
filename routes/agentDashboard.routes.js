import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { getApplicationMonthlyCountForAgent, getTotalApplicationCount, getTotalApplicationOverview, getTotalCompletedCount, getTotalStudentCount, getTotalUnderReviewCount, getTotalUsersCountForAgent } from "../controllers/agentDashboard.controller.js";
import { deleteStudentData } from "../controllers/studentInformation.controller.js";
const router = Router();

router.route("/total-application").get(verifyJwt, getTotalApplicationCount);
router.route("/total-student-count").get(verifyJwt, getTotalStudentCount);
router.route("/under-review-application").get(verifyJwt, getTotalUnderReviewCount);
router.route("/completed-application").get(verifyJwt, getTotalCompletedCount);
router.route("/application-overview").get(verifyJwt, getTotalApplicationOverview);
router.route("/user-monthly-counts-agent").get(verifyJwt, getTotalUsersCountForAgent);
router.route("/total-application-monthly-count-agent").get(verifyJwt, getApplicationMonthlyCountForAgent);
router.route("/delete-student/:id").get(verifyJwt, deleteStudentData);

export default router;
