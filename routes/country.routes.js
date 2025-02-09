import { Router } from "express";
import { getAllCountries, getAllCountryState, getAllCourses, getAllPopularCourses, getPreferredCountries } from "../controllers/country.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/all").get( getAllCountries);
router.route("/preferred").get( getPreferredCountries);
router.route("/courses").get(getAllCourses);
router.route("/popular-courses").get(getAllPopularCourses);
router.route("/country-state-data").get(getAllCountryState);



export default router;