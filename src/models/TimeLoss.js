import mongoose from "mongoose";
const TimeLossSchema = new mongoose.Schema(
  {
    date: String,
    checkNo: String,
    payee: String,
    totalCheck: String,
    iwjFee: String,
    paidOut: String,
    method: String,
    cleared: { type: String, enum: ["Yes", "No"], default: "No" },
    bank: String,
    accountLast4: String,
    notes: String,
    caseId: String,
    clientName: String,
  },
  { timestamps: true }
);

export default  mongoose.model("TimeLoss", TimeLossSchema);
