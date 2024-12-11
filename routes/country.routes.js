import { Router } from "express";
import { getAllCountries, getAllCourses, getPreferredCountries } from "../controllers/country.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/all").get( getAllCountries);
router.route("/preferred").get( getPreferredCountries);
router.route("/courses").get(getAllCourses);

export default router;