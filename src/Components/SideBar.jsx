import React from "react";

export default function SideBar({ handleIndex, posts }) {
  const side = posts?.map((e, index) => (
    <li key={index} onClick={() => handleIndex(index)}>
      {e.title}
    </li>
  ));
  return (
    <div class="sidebar">
      <h2>Blog Posts</h2>
      <ul>{side}</ul>
    </div>
  );
}
