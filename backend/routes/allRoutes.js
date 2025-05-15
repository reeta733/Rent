import express from "express";
import OwnerRoutes from "./OwnerRoutes.js";
import SeekerRoutes from "./SeekerRoutes.js";
import SeekerAuthRoutes from "./SeekerAuthRouets.js";
import OwnerAuthRoutes from "./OwnerAuthRouets.js";
import City from "./CityRoutes.js";
import AdminAuthRoute from "./AdminAuthRoute.js";
import OwnerProfileRoutes from "./OwnerProfileRoutes.js";
import SeekerProfileRoutes from "./SeekerProfileRoute.js";
import PropertyRoute from "./PropertyRoute.js";
import ContactRoute from "./ContactRoute.js";

let routes = express.Router();

routes.use("/api/v1/owner", OwnerRoutes);
routes.use("/api/v1/seeker", SeekerRoutes);
routes.use("/api/v1/seekerauth", SeekerAuthRoutes);
routes.use("/api/v1/ownerauth", OwnerAuthRoutes);
routes.use("/api/v1/city", City);
routes.use("/api/v1/admin", AdminAuthRoute);
routes.use("/api/v1/ownerprofile", OwnerProfileRoutes);
routes.use("/api/v1/seekerprofile", SeekerProfileRoutes);
routes.use("/api/v1/property", PropertyRoute);
routes.use("/api/v1/contact", ContactRoute);

export default routes;
