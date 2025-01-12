import express from "express";
import {
  createAirTicketingRequest,
  updateAirTicketingRequest,
  replaceAirTicketingRequest,
  getAllAirTicketingRequests,
  getAirTicketingRequestById,
} from "../controllers/airTicketing.controller.js";
import { verifyAdmin, verifyJwt } from "../middlewares/auth.middleware.js";

const router = express.Router();

//normal user routes
router.post("/create-air-ticket", verifyJwt, createAirTicketingRequest);
router.patch("/update-air-ticket/:id", verifyJwt, updateAirTicketingRequest);
router.put("/air-ticket/:id", verifyJwt, replaceAirTicketingRequest);
router.get("/get-all-air-ticket", verifyJwt, getAllAirTicketingRequests);
router.get("/get-air-ticket/:id", verifyJwt, getAirTicketingRequestById);

//admin routes
router.get("/admin/get-all-air-ticket", verifyAdmin, getAllAirTicketingRequests);
router.get("/admin/get-air-ticket/:id", verifyAdmin, getAirTicketingRequestById);

export default router;