import mongoose from "mongoose";

const CallLogSchema = new mongoose.Schema(
  {
    dateTime: String,
    commType: { type: String, enum: ["Call", "Text"], required: true },
    direction: { type: String, enum: ["Incoming", "Outgoing"], required: true },
    contactRole: String,
    contactName: String,
    phone: String,

    caseId: String,
    clientName: String,

    durationMinutes: Number,
    textPreview: String,

    notes: String,
    followUpRequired: { type: Boolean, default: false },
    followUpDueDate: String,
  },
  { timestamps: true }
);

export default mongoose.model("CallLog", CallLogSchema);
