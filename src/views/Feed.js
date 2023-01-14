import React, { useState, useEffect } from "react";

import Navigation from "../components/Navigation";
import PostItem from "../components/PostItem";
import EditPost from "../components/EditPost";

import { get } from "../utils/fetch";

const Feed = () => {
  const [isEditFormOpen, setEditFormOpen] = useState(false);
  const [postAction, setAction] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAllPost = () => {
      const response = get("/get-posts");
      response.then((res) => {
        console.log("res:", res);
        setPosts(res.data);
      });
    };
    getAllPost();
  }, []);

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
            {posts.length > 0 ? (
              posts.map((post, i) => (
                <PostItem
                  key={i}
                  isOpen={isEditFormOpen}
                  handleOpenModal={handleOpenModal}
                  detail={post}
                />
              ))
            ) : (
              <></>
            )}
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
