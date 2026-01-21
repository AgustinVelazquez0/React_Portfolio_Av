import mongoose from "mongoose";

const ContactMessageSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, maxlength: 80, default: "" },
    email: { type: String, trim: true, lowercase: true, maxlength: 160, default: "" },
    message: { type: String, trim: true, maxlength: 2000, required: true },
    source: { type: String, trim: true, maxlength: 40, default: "portfolio" },
    meta: {
      ip: { type: String, trim: true, maxlength: 80, default: "" },
      userAgent: { type: String, trim: true, maxlength: 500, default: "" },
    },
  },
  { timestamps: true }
);

export const ContactMessage =
  mongoose.models.ContactMessage ||
  mongoose.model("ContactMessage", ContactMessageSchema);

