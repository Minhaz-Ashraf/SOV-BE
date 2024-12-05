import { Router } from "express";
import { verifyAdmin, verifyJwt } from "../middlewares/auth.middleware.js";
import { getCompanyData, registerBankDetails, registerCompany, registerCompanyContact, registerCompanyOperations, registerCompanyOverview, registerReferences, updateCompanyStatus } from "../controllers/company.controller.js";
import { deleteAgent } from "../controllers/adminDashboard.controller.js";
const router = Router();

router.route("/register-company").post(verifyJwt, registerCompany);
router.route("/register-companyContact").post(verifyJwt, registerCompanyContact);
router.route("/register-bankDetails").post(verifyJwt, registerBankDetails);
router.route("/register-companyOverview").post(verifyJwt, registerCompanyOverview);
router.route("/register-companyOperations").post(verifyJwt, registerCompanyOperations);
router.route("/register-references").post(verifyJwt, registerReferences);
router.route("/register-company-admin").post(verifyAdmin, registerCompany);
router.route("/register-companyContact-admin").post(verifyAdmin, registerCompanyContact);
router.route("/register-bankDetails-admin").post(verifyAdmin, registerBankDetails);
router.route("/register-companyOverview-admin").post(verifyAdmin, registerCompanyOverview);
router.route("/register-companyOperations-admin").post(verifyAdmin, registerCompanyOperations);
router.route("/register-references-admin").post(verifyAdmin, registerReferences);
router.route("/company-data").get(verifyJwt, getCompanyData);
router.route("/delete-agent/:agentId").delete(verifyJwt, deleteAgent) 
router.route("/update-agent-reapproval-status/:companyId").put(verifyJwt, updateCompanyStatus) 

export default router;