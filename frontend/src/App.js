import React, { useState } from "react";
import CharacterSelect from "./components/CharacterSelect";
import ChatBox from "./components/ChatBox";

function App() {
  const [character, setCharacter] = useState("하이틴 주인공");

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🎮 AI 캐릭터 챗봇</h1>
      <CharacterSelect setCharacter={setCharacter} />
      <ChatBox character={character} />
    </div>
  );
}

export default App;
