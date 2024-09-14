import express from "express";
import dotenv from "dotenv";
dotenv.config();
import authRoutes from "./routes/authRoutes.js";
import { connectDB } from "./lib/db.js";
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json()); //parse request bodies
app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  connectDB();
});
