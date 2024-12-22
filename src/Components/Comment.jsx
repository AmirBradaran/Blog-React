import React from "react";

export default function Comment({ author, body }) {
  return (
    <div className="comment">
      <p>
        <strong>{author}</strong>
        {body}
      </p>
    </div>
  );
}
