import { Router } from "express";
import {
  approveStudent,
  changePassword,
  login,
  logout,
  requestChangeEmail,
  requestPasswordResetOtp,
  resendAgentOtp,
  resendStudentOtp,
  resetPassword,
  sendAgentOtp,
  sendOptForEmail,
  sentStudentOtp,
  verifyAgentOtp,
  verifyAndChangeEmail,
  verifyOptAndUpdateEmail,
  verifyOtp,
  verifyStudentOtp,
} from "../controllers/auth.controller.js";
import { verifyAdmin, verifyJwt } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/verify-student").post(verifyStudentOtp);
router.route("/sent-studentOtp").post(sentStudentOtp);
router.route("/sent-agentOtp").post(sendAgentOtp);
router.route("/verify-agent").post(verifyAgentOtp);
router.route("/login").post(login);
router.route("/logout").post(verifyJwt, logout);
router.route("/change-password").patch(verifyJwt, changePassword);
router.route("/approve-student").patch(verifyAdmin, approveStudent);
router.route("/password-reset-otp").post(requestPasswordResetOtp);
router.route("/reset-password").post(resetPassword);
router.route("/resend-otp-student").post(resendStudentOtp);
router.route("/resend-otp-agent").post(resendAgentOtp);
router.route("/verify-otp").post(verifyOtp);
router.route("/request-change-email").post(verifyJwt,requestChangeEmail);
router.route("/change-email").post(verifyJwt, verifyAndChangeEmail);
router.route("/change-email-otp").post(verifyJwt, sendOptForEmail);
router.route("/update-email").patch(verifyJwt, verifyOptAndUpdateEmail);



export default router;
