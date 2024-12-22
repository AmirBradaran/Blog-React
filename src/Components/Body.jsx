import React, { useEffect, useState } from "react";

export default function Body({ post }) {
  const [comments, setComments] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/comments?post-id=${post.id}`
        );
        const data = await res.json();
        setComments(data);
      } catch (error) {
        console.log(Error - Fetch);
      }
    })();
  }, [post]);
  const commennts = comments?.map((e, index) => {
    <Comment key={index} author={e.author} body={e.body} />;
  });
  return (
    <div class="content">
      <h1>{post.title}</h1>
      <img src={`assets/${post.image}`} alt="Blog Image" />
      <p>{post.body}</p>

      <div class="comments">
        <h3>Comments</h3>
        {commennts}
      </div>
    </div>
  );
}
