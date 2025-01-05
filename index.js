const express = require("express");
const path = require("path");
const db = require("./connection");
const cookieParser = require("cookie-parser");
const { restrictToLogin } = require("./middleware/auth");

const app = express();
const port = 3000;

const urlRoute = require("./routes/url");
const userRoute = require("./routes/user");
const staticRoutes = require("./routes/staticRoutes");

// Connect to MongoDB
db.connectDB("mongodb://127.0.0.1:27017/LinkLite");

// Middleware to parse JSON
app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


// URL Routes (API)
app.use("/url", restrictToLogin ,urlRoute);
app.use("/user", userRoute);
app.use("/", staticRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
