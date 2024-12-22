import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Body from "./Body";

export default function Blog() {
  const [posts, setPosts] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
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
  const handleIndex = (z) => {
    setCurrentIndex(z);
  };
  return (
    <>
      {!posts ? (
        <h2>Loading ....</h2>
      ) : (
        <>
          <SideBar posts={posts} handleIndex={handleIndex} />
          <Body post={posts[currentIndex]} />
        </>
      )}
    </>
  );
}
