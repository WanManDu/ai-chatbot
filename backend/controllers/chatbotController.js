const { callAIEngine } = require("../services/aiServices");
const ChatLog = require("../models/chatLog");

exports.handleChatRequest = async (req, res) => {
    try {
        const { message , character } = req.body;
        const aiResponse = await callAIEngine(message, character);

        //대화 저장
        const newChat = new ChatLog({
            userMessage: message,
            character,
            aiResponse
        });
        await newChat.save();

        res.status(200).json({ response: aiResponse });
    } catch (error) {
        console.error("AI 호출 실패:", error.message);
        res.status(500).json({ error : " AI 엔진 호출 실패 "});
    }
};