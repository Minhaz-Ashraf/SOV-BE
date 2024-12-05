import { Router } from "express";
import { verifyAdmin, verifyJwt } from "../middlewares/auth.middleware.js";
import { getWithdrawalDetails, setVisaToWithdrawalComplete, withdrawal } from "../controllers/withdrawal.controller.js";
const router = Router();

router.route("/withdrawal").post( verifyJwt, withdrawal);
router.route("/get-withdrawal/:userId").get(getWithdrawalDetails);
router.route("/withdrawal-complete").put(verifyAdmin, setVisaToWithdrawalComplete);

export default router;