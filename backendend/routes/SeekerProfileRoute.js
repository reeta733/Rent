import express from "express";
import { SeekerProfile } from "../controllers/SeekerProfileController.js";

const routes = express.Router();

routes.get("/", SeekerProfile);

export default routes;
