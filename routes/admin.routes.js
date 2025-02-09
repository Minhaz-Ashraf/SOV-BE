import { Router } from "express";
import {
  addTeamMember,
  adminLogin,
  changeAdminEmail,
  changePassword,
  editProfile,
  editTeamMember,
  getAllPartner,
  getAllTeamMembers,
  getPartnerEmployees,
  getProfileData,
  getProfileDataById,
  softDeleteTeamMember,
} from "../controllers/admin.controller.js";
import { verifyAdmin } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/login").post(adminLogin);
router.route("/change-password").post(verifyAdmin, changePassword);
router.route("/change-email").post(verifyAdmin, changeAdminEmail);
router.route("/edit-profile").patch(verifyAdmin, editProfile);
router.route("/profile").get(verifyAdmin, getProfileData);
router.route("/team-profile/:teamId").get(verifyAdmin, getProfileData);
router.route("/add-team-member").post(verifyAdmin, addTeamMember);
router.route("/edit-team-member/:teamID").put(verifyAdmin, editTeamMember);
router.route("/delete-team-member/:teamID").patch(verifyAdmin, softDeleteTeamMember);
router.route("/get-team-members").get(verifyAdmin, getAllTeamMembers);
router.route("/get-partner-lists").get(verifyAdmin, getAllPartner);
router.route("/get-partner-employees").get(verifyAdmin, getPartnerEmployees);
router.route("/get-one-profile").get(verifyAdmin, getProfileDataById);




export default router;
