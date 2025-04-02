import express from "express";
import OwnerRoutes from "./OwnerRoutes.js";
import SeekerRoutes from "./SeekerRoutes.js";
import SeekerAuthRoutes from "./SeekerAuthRouets.js";
import OwnerAuthRoutes from "./OwnerAuthRouets.js";
import City from "./CityRoutes.js";
import AdminAuthRoute from "./AdminAuthRoute.js";

let routes = express.Router();

routes.use("/api/v1/owner", OwnerRoutes);
routes.use("/api/v1/seeker", SeekerRoutes);
routes.use("/api/v1/seekerauth", SeekerAuthRoutes);
routes.use("/api/v1/ownerauth", OwnerAuthRoutes);
routes.use("/api/v1/city", City);
routes.use("/api/v1/admin", AdminAuthRoute);

export default routes;
