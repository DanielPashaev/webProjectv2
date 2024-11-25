require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const itemRoutes = require("../routes/itemRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to Database
connectDB();

// Routes
app.use("/api/items", itemRoutes);

// Start Server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
