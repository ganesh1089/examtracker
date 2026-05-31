const express = require("express");
const router = express.Router();

const Progress = require("../models/Progress");

// ================= SAVE / UPDATE PROGRESS =================
router.post("/save", async (req, res) => {

    try {

        const { userId, exam, subject, topic, status } = req.body;

        if (!userId) {
            return res.status(400).json({ message: "User not found" });
        }

        await Progress.findOneAndUpdate(
            { userId, exam, subject, topic },
            { status },
            { upsert: true, new: true }
        );

        res.json({ message: "Progress Saved" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }

});


// ================= GET PROGRESS =================
router.get("/:userId", async (req, res) => {

    try {

        const data = await Progress.find({
            userId: req.params.userId
        });

        res.json(data);

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }

});


// ================= RESET PROGRESS (OPTIONAL) =================
router.delete("/:userId", async (req, res) => {

    try {

        await Progress.deleteMany({
            userId: req.params.userId
        });

        res.json({ message: "Progress Reset Done" });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }

});

module.exports = router;