const axios = require("axios");

exports.callAIEngine = async (message, character) => {
    const res = await axios.post("http://localhost:8000/generate", {
        message,
        character
    });
    return res.data.response;
};