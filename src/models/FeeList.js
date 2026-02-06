import mongoose from "mongoose";

const FeeListSchema = new mongoose.Schema(
  {
    client: String,
    tl: { type: String, enum: ["Yes", "No"], default: "No" },
    lastTL: String,
    agreement: String,
    method: { type: String, enum: ["Deposit", "Pick-Up"], default: "Deposit" },
    bank: String,
    accountLast4: String,
    guide: String,
    notes: String,
  },
  { timestamps: true }
);

export default  mongoose.model("FeeList", FeeListSchema);
