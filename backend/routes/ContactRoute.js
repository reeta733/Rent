import express from "express";
import {
  createContact,
  getContacts,
  getContactById,     
  updateContact,
  deleteContact,
} from "../controllers/ContactController.js";

const router = express.Router();

router.post("/", createContact);           // POST /contact
router.get("/", getContacts);              // GET /contact
router.get("/:id", getContactById);        // GET /contact/:id (optional)
router.put("/:id", updateContact);         // PUT /contact/:id
router.delete("/:id", deleteContact);      // DELETE /contact/:id

export default router;
