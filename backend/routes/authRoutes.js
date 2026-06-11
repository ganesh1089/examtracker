const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");


router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields required"
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      message: "Signup successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (err) {
    console.log("SIGNUP ERROR:", err);

    res.status(500).json({
      message: "Server Error"
    });
  }
});
// ================= LOGIN =================
router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        // check input
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and Password required"
            });
        }

        // find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "User not found"
            });
        }

        // check password safely
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid password"
            });
        }

        // create token
        const token = jwt.sign(
            { id: user._id },
            "secretkey",
            { expiresIn: "1d" }
        );

       return res.json({
    message: "Login successful",
    token,
    user: {
        _id: user._id,
        name: user.name,
        email: user.email
    }
});

    } catch (err) {
        console.log("LOGIN ERROR:", err);
        return res.status(500).json({
            message: "Server error"
        });
    }
});

module.exports = router;