import mongoose from "../config/conn.js";

const ContactSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    message: String,
    oid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Owner",
    },
    // seeker_id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Seeker",
    // },
    pid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property",
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", ContactSchema);
export default Contact;
