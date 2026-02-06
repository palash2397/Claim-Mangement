import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: String,
    category: String,
    status: String,
    assignedTo: String,
    relatedCase: String,
    priority: String,
    startDate: String,
    dueDate: String,
    estimatedHours: Number,
    reminder: String,
    tags: [String],
    visibility: String,
    description: String,
    internalNotes: String,
    attachmentUrl: String,
  },
  { timestamps: true }
);

export default mongoose.model("Task", TaskSchema);
