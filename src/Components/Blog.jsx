import React from 'react'

export default function Blog() {
  return (
    <>
     <div class="sidebar">
      <h2>Blog Posts</h2>
      <ul>
        <li><a href="#">Post 1</a></li>
        <li><a href="#">Post 2</a></li>
        <li><a href="#">Post 3</a></li>
      </ul>
    </div> 
    <div class="content">
      <h1>Blog Title</h1>
      <img src={"https://via.placeholder.com/800x400"} alt="Blog Image"/>
      <p>
        This is the body of the blog post. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Integer posuere erat a ante.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>


      <div class="comments">
        <h3>Comments</h3>

        <div class="comment">
          <p><strong>John Doe:</strong> Great blog post! Learned a lot from
            this.</p>
          <small>Posted on: October 3, 2024</small>
        </div>

        <div class="comment">
          <p><strong>Jane Smith:</strong> Very informative, thank you for
            sharing!</p>
          <small>Posted on: October 4, 2024</small>
        </div>
      </div>
    </div>
    </>
  )
}
