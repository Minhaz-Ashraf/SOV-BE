import { Router } from "express";
import { getAllCountries, getAllCourses, getAllPopularCourses, getPreferredCountries } from "../controllers/country.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";
const router = Router();

router.route("/all").get( getAllCountries);
router.route("/preferred").get( getPreferredCountries);
router.route("/courses").get(getAllCourses);
router.route("/popular-courses").get(getAllPopularCourses);


export default router;