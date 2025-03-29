const mongoose = require("mongoose");

const ChatLogSchema = new mongoose.Schema({
    userMessage: String,
    character: String,
    aiResponse: String,
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("ChatLog", ChatLogSchema);

