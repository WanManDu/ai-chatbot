import axios from "axios";

export const sendMessageToBot = async (message, character) => {
  try {
    const res = await axios.post("http://localhost:5001/chat", {
      message,
      character,
    });
    return res.data.response;
  } catch (err) {
    console.error("AI 응답 오류:", err);
    return "⚠️ 서버 오류가 발생했어요.";
  }
};
