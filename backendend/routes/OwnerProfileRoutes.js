import express from "express";
import { OwnerProfile } from "../controllers/OwnerProfileController.js";
const routes = express.Router();

routes.get("/", OwnerProfile);

export default routes;
