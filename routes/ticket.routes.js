import { Router } from "express";
import { verifyAdmin, verifyJwt } from "../middlewares/auth.middleware.js";
import { createTicket, downloadAllTicketsAsCSV, getAllTickets, getAllTicketsSubadmin, getMyTickets, getTicketById, updateTicketStatus, updateTicketStatusBySubadmin } from "../controllers/ticket.controller.js";
const router = Router();

router.route("/create-ticket").post( verifyJwt, createTicket);
router.route("/all").get( verifyAdmin, getAllTickets);
router.route("/download-all").get( verifyAdmin, downloadAllTicketsAsCSV);
router.route("/my-tickets").get( verifyJwt, getMyTickets);
router.route("/ticket/:ticketId").get(  getTicketById);
router.route("/ticket/:ticketId").patch( verifyAdmin, updateTicketStatus);
router.route("/sub-admin-tickets").get( verifyAdmin, getAllTicketsSubadmin);
router.route("/ticket-subadmin/:ticketId").patch( verifyAdmin, updateTicketStatusBySubadmin);


export default router;