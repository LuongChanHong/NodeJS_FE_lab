import React from "react";

import Navigation from "../components/Navigation";

const PostDetail = () => {
  return (
    <section>
      <Navigation />
      <section className="postDetail__container mt-3">
        <section className="postDetail__wrapper d-flex flex-column align-items-center">
          <section className="postDetail__content"></section>
          <h3>Post Title</h3>
          <p>Posted on 1/1/2022</p>
          <hr />
          <img />
          <article>Post content</article>
        </section>
      </section>
    </section>
  );
};

export default PostDetail;
