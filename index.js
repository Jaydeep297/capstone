import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
// Connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://jaydeep2k01:jaydeep123@capstone.ft7wz.mongodb.net/Netflix_clone_db?retryWrites=true&w=majority&appName=Capstone"
    );
    console.log("\nThe Express Connection with the Database is now done");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
};
connectDB();

app.use("api/v1/auth", authRoutes);

app.listen(4000, () =>
  console.log("Backend server is running on port 4000 on this machine")
);
