import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();
const app = express();

app.use("/api/auth", authRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    connectDB();
});

