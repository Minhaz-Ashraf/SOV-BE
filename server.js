import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import helmet from "helmet";

const app = express();

// Middleware
app.use(helmet());
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cookieParser());
app.use(cors());


// Import api routes
import authRouter from "./routes/auth.routes.js";
import studentInformationRouter from "./routes/studentInformation.routes.js";
import companyRouter from "./routes/company.routes.js";
import countryRouter from "./routes/country.routes.js";
import instituteRouter from "./routes/institute.routes.js";
import institutionRouter from "./routes/institution.routes.js";
import documentRouter from "./routes/document.routes.js";
import withdrawalRouter from "./routes/withdrawal.routes.js";
import agentRouter from "./routes/agentDashboard.routes.js";
import wishlistRouter from "./routes/wishlist.routes.js";
import ticketRouter from "./routes/ticket.routes.js";
import adminRouter from "./routes/adminDashboard.routes.js";
import adminAuthRouter from "./routes/admin.routes.js";
import connectionDetailsRouter from "./routes/getConnectionDetails.routes.js";
import airTicketRouter from "./routes/airTicketing.routes.js";



// User routes
app.use("/api/auth", authRouter);
app.use("/api/studentinformation", studentInformationRouter);
app.use("/api/company", companyRouter);
app.use("/api/country", countryRouter);
app.use("/api/institute", instituteRouter);
app.use("/api/institution", institutionRouter);
app.use("/api/document", documentRouter);
app.use("/api/withdrawal", withdrawalRouter);
app.use("/api/agent", agentRouter);
app.use("/api/wishlist", wishlistRouter);
app.use("/api/ticket",ticketRouter );
app.use("/api/admin",adminRouter );
app.use("/api/auth/admin",adminAuthRouter );
app.use("/api/socket", connectionDetailsRouter);
app.use("/api/air-ticket", airTicketRouter);

export default app;
