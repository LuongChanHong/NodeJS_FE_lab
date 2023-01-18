import React, { useState } from "react";

import { post } from "../utils/fetch";

const PostItem = (props) => {
  const [isModalOpen, setModalOpen] = useState(props.isOpen);
  const postDetail = props.detail;
  let updatedAt = new Date(postDetail.updatedAt);
  updatedAt =
    updatedAt.getDate() +
    "/" +
    updatedAt.getMonth() +
    1 +
    "/" +
    updatedAt.getFullYear();

  const deletePost = (e) => {
    // e.preventDefault();
    post("/delete-post", { id: postDetail._id });
    props.getAllPost();
  };

  return (
    <section className="post__container border--primary m-2 p-2">
      <section className="post__wrapper">
        <span>Posted on {updatedAt}</span>
        <h1>{postDetail.title}</h1>
        <div className="post__buttons d-flex justify-content-end ">
          <button className="button button-primary mx-1">
            <a
              href={`/post-detail/${postDetail._id}`}
              className="text-decoration-none text-white"
            >
              View
            </a>
          </button>
          <button
            className="button button-primary mx-1 "
            onClick={() => props.handleOpenModal("edit", postDetail._id)}
          >
            Edit
          </button>
          <button
            className="button button-primary mx-1"
            onClick={(e) => deletePost(e)}
          >
            Delete
          </button>
        </div>
      </section>
    </section>
  );
};

export default PostItem;
