import mongoose from "mongoose";

const CaseSchema = new mongoose.Schema(
  {
    caseTitle: String,

    // client
    clientName: String,
    clientPhone: String,
    clientAddress: String,
    clientWork: String,
    clientDob: String,
    emergencyContact: String,

    // claim
    claimNo: String,
    doi: String,
    cm: String,
    cmPhone: String,
    supervisor: String,
    supervisorPhone: String,
    employer: String,
    tpa: String,
    tpaPhone: String,
    si: String,
    siPhone: String,
    provider: String,
    providerPhone: String,
    vrc: String,
    vrcPhone: String,
    vocationalStatus: String,
    roa: String,
    allowedConditions: String,
    tl: { type: String, enum: ["Yes", "No"], default: "No" },
    lastApf: String,
    lastWsf: String,

    status: { type: String, enum: ["Active", "Intake", "Closed"], default: "Active" },
    assignedManager: String,
    lastActivity: String,

    notes: String,
  },
  { timestamps: true }
);

export default mongoose.model("Case", CaseSchema);
