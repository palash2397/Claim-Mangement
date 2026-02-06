import mongoose from "mongoose";

async function connectDB(uri) {
  mongoose.set("strictQuery", true);
  await mongoose.connect(uri);
  console.log("✅ MongoDB Connected");
}

export default connectDB;
