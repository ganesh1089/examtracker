const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({

    userId: {
        type: String,
        required: true
    },

    exam: {
        type: String,
        required: true
    },

    subject: {
        type: String,
        required: true
    },

    topic: {
        type: String,
        required: true
    },

    status: {
        type: String,
        enum: ["weak", "medium", "strong"],
        required: true
    }

}, { timestamps: true });

module.exports = mongoose.model("Progress", progressSchema);