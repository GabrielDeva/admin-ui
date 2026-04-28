import { useState } from "react";
import "./PostCard.css";

function PostCard({ id, userId, title, body }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="card">
      <h4 className="card-title">{title}</h4>

      <p className="card-body">{body}</p>

      <button
        className={`card-button ${clicked ? "clicked" : ""}`}
        onClick={() => setClicked(true)}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default PostCard;