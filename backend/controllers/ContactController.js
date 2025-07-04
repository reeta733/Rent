import Contact from "../models/Contact.js";

// CREATE
const createContact = async (req, res) => {
  try {
    const { username, email, message, pid, oid } = req.body;
    if (!username || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (error) {
    console.error("Create contact error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// READ ALL
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find()
      .populate("pid")
      .populate("oid")
      .exec();

    res.json(contacts);
  } catch (error) {
    console.error("Fetch contacts error:", error);
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
};

// READ ONE
const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id)
      .populate("pid")
      .populate("oid")
      .exec();

    if (!contact) return res.status(404).json({ error: "Contact not found" });

    res.json(contact);
  } catch (error) {
    console.error("Get contact by ID error:", error);
    res.status(500).json({ error: "Failed to get contact" });
  }
};

// UPDATE
const updateContact = async (req, res) => {
  try {
    const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ error: "Contact not found" });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: "Failed to update contact" });
  }
};

// DELETE
const deleteContact = async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Contact not found" });
    res.json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete contact" });
  }
};

export {
  createContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact,
};
