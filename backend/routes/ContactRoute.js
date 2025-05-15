import express from "express";
import {
  createContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact,
} from "../controllers/ContactController.js";

const router = express.Router();

router.post("/", createContact);       // CREATE
router.get("/", getContacts);          // READ ALL
router.get("/:id", getContactById);   // READ ONE
router.put("/:id", updateContact);    // UPDATE
router.delete("/:id", deleteContact); // DELETE

export default router;
