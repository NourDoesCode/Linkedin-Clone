import express from "express";
import dotenv from "dotenv";
dotenv.config();
import authRoutes from "./routes/authRoutes.js";
const app = express();
const PORT = process.env.PORT || 5000;

app.use("api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
