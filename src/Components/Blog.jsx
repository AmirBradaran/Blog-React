import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";

export default function Blog() {
  const [posts, setPosts] = useState();
  const [currentIndex , setCurrentIndex]=useState(0)
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:3000/posts");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.log(Error - Fetch);
      }
    })();
  }, []);
  const handleIndex = (z) =>{
    setCurrentIndex(z)
  }
  return (
    <>
      <SideBar posts={posts} handleIndex={handleIndex} />
      <div class="content">
        <h1>Blog Title</h1>
        <img src={"https://via.placeholder.com/800x400"} alt="Blog Image" />
        <p>
          This is the body of the blog post. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
          ante.
        </p>

        <div class="comments">
          <h3>Comments</h3>

          <div class="comment">
            <p>
              <strong>John Doe:</strong> Great blog post! Learned a lot from
              this.
            </p>
            <small>Posted on: October 3, 2024</small>
          </div>

          <div class="comment">
            <p>
              <strong>Jane Smith:</strong> Very informative, thank you for
              sharing!
            </p>
            <small>Posted on: October 4, 2024</small>
          </div>
        </div>
      </div>
    </>
  );
}
