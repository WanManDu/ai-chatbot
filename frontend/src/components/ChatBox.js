import React, { useState } from "react";
import { sendMessageToBot } from "../services/chatbotService";

function ChatBox({ character }) {
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message || !character) {
        alert("메시지나 캐릭터가 비어있습니다!");
        return;
      }
    
    console.log("👉 사용자 입력:", message);
    console.log("👉 선택된 캐릭터:", character);

    setChatLog([...chatLog, { role: "user", text: message }]);

    const aiReply = await sendMessageToBot(message, character);
    setChatLog((prev) => [...prev, { role: "bot", text: aiReply }]);

    setMessage("");
  };

  return (
    <div>
      <div style={{ maxHeight: "300px", overflowY: "auto", border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
        {chatLog.map((entry, index) => (
          <p key={index}><strong>{entry.role === "user" ? "🙋‍♂️ 나" : "🤖 " + character}:</strong> {entry.text}</p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="메시지를 입력하세요..."
        />
        <button type="submit">보내기</button>
      </form>
    </div>
  );
}

export default ChatBox;
