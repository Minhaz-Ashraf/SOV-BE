import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { addToWishlist, fetchWishlist, removeFromWishlist } from "../controllers/wishlist.controller.js";

const router = Router();

router.route("/wishlist")
  .post(verifyJwt, addToWishlist)
  .get(verifyJwt, fetchWishlist);

router.route("/wishlist/:instituteId")
  .delete(verifyJwt, removeFromWishlist);

export default router;
