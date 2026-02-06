import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    role: String,
    title: String,
    type: String,
    caseId: String,
    date: String,
    status: { type: String, enum: ["Active", "Completed", "Cancelled"], default: "Active" },

    orderDate: String,
    deadlineDate: String,
    orderType: String,

    outcomeNotes: String,
  },
  { timestamps: true }
);

export default mongoose.model("Event", EventSchema);
