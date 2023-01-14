import React, { useState } from "react";

import Navigation from "../components/Navigation";
import PostItem from "../components/PostItem";
import EditPost from "../components/EditPost";

const Feed = () => {
  const [isEditFormOpen, setEditFormOpen] = useState(false);
  const [postAction, setAction] = useState("");

  const handleOpenModal = (action) => {
    setEditFormOpen(!isEditFormOpen);
    setAction(action);
  };

  return (
    <section>
      <Navigation />
      <section className="feed__container">
        <section className="feed__wrapper">
          <div className="feed__addPost--button d-flex justify-content-center mt-3">
            <button
              className="button button-primary"
              onClick={() => handleOpenModal(!isEditFormOpen, "new")}
            >
              New Post
            </button>
          </div>
          <section className="feed__postList mt-3 container">
            <PostItem
              isOpen={isEditFormOpen}
              handleOpenModal={handleOpenModal}
            />
            <PostItem
              isOpen={isEditFormOpen}
              handleOpenModal={handleOpenModal}
            />
            <PostItem
              isOpen={isEditFormOpen}
              handleOpenModal={handleOpenModal}
            />
          </section>
        </section>
        {isEditFormOpen ? (
          <EditPost
            isOpen={isEditFormOpen}
            postAction={postAction}
            handleOpenModal={handleOpenModal}
          />
        ) : (
          <></>
        )}
      </section>
    </section>
  );
};

export default Feed;
