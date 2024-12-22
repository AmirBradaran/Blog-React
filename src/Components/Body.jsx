import React from 'react'

export default function Body({post}) {
  return (
    <div class="content">
        <h1>{post.title}</h1>
        <img src={`assets/${post.image}`} alt="Blog Image" />
        <p>
            {post.body}
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
  )
}
