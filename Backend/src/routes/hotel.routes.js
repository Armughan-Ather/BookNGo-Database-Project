import { Router } from "express";
import { allHotels } from "../controllers/hotel.controller.js";
import { searchHotels } from "../controllers/hotel.controller.js";
import { searchAvailableHotels } from "../controllers/hotel.controller.js";

const router = Router()

router.route("/allHotels").get(allHotels)
router.route("/searchHotels").post(searchHotels)
router.route("/searchAvailableHotels").post(searchAvailableHotels)

export default router;