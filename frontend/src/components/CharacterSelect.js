import React from "react";

const characters = [
  "네이버 웹툰 화신귀환 주인공 청명",
  "영화 해리포터 주인공 해리",
  "일본 만화 원피스 주인공 루피",
  "일본 만화 최애의 아이 주인공 아이",
  "미국 영화 아이언맨 주인공 아이언맨",
];

function CharacterSelect({ setCharacter }) {
  return (
    <div>
      <label>🎭 캐릭터 선택: </label>
      <select onChange={(e) => setCharacter(e.target.value)}>
        {characters.map((char, index) => (
          <option key={index} value={char}>{char}</option>
        ))}
      </select>
    </div>
  );
}

export default CharacterSelect;
