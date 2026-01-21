import mongoose from "mongoose";

const GuestbookEntrySchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, maxlength: 60, default: "" },
    message: { type: String, trim: true, maxlength: 400, required: true },
    meta: {
      ip: { type: String, trim: true, maxlength: 80, default: "" },
      userAgent: { type: String, trim: true, maxlength: 500, default: "" },
    },
  },
  { timestamps: true }
);

export const GuestbookEntry =
  mongoose.models.GuestbookEntry ||
  mongoose.model("GuestbookEntry", GuestbookEntrySchema);

