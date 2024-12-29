const express = require("express");
const path = require("path");
const urlRoute = require("./routes/url");
const db = require("./connection");

const app = express();
const port = 3000;

// Connect to MongoDB
db.connectDB("mongodb://127.0.0.1:27017/LinkLite");

// Middleware to parse JSON
app.use(express.json());

// Serve static files (Frontend)
app.use(express.static(path.join(__dirname, "public")));

// URL Routes (API)
app.use("/url", urlRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
