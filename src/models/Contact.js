import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    email: String,
    status: {
      type: String,
      enum: ["Potential", "Inquiry", "Client", "Callback", "Closed"],
      default: "Potential",
    },
    assigned: String,
  },
  { timestamps: true }
);

export default mongoose.model("Contact", ContactSchema);
