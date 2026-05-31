const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());

// ================= DB CONNECTION =================
console.log("MONGO_URI =", process.env.MONGO_URI); // debug line

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Atlas Connected 🚀");
})
.catch((err) => {
    console.log("MongoDB Connection Error ❌", err.message);
});

// ================= ROUTES =================
app.use("/api/auth", require("./routes/authRoutes"));

// ================= HOME ROUTE =================
app.get("/", (req, res) => {
    res.send("Exam Tracker Backend Running 🚀");
});


app.use("/api/progress", require("./routes/progressRoutes"));

app.use(
"/api/user",
require("./routes/userRoutes")
);
// ================= SERVER =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running On ${PORT} 🚀`);
});