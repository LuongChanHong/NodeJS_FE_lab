import React, { useState } from "react";

const PostItem = (props) => {
  const [isModalOpen, setModalOpen] = useState(props.isOpen);

  return (
    <section className="post__container border--primary m-2 p-2">
      <section className="post__wrapper">
        <span>Posted on 1/1/2022</span>
        <h1>Post title</h1>
        <div className="post__buttons d-flex justify-content-end ">
          <button className="button button-primary mx-1">
            <a href="/post-detail" className="text-decoration-none text-white">
              View
            </a>
          </button>
          <button
            className="button button-primary mx-1 "
            onClick={() => props.handleOpenModal("edit")}
          >
            Edit
          </button>
          <button className="button button-primary mx-1">Delete</button>
        </div>
      </section>
    </section>
  );
};

export default PostItem;
