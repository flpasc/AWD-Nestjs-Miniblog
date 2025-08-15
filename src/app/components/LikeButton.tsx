"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState<number>(0);

  const handleClick = () => {
    setLikes(likes + 1);
  };

  return (
    <button
      onClick={handleClick}
      style={{ padding: "5px 10px", margin: "10px", backgroundColor: "green" }}
    >
      <span>Likes: {likes}</span>
    </button>
  );
}
