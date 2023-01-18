import React, { useState, useEffect } from "react";

import Navigation from "../components/Navigation";
import PostItem from "../components/PostItem";
import EditPost from "../components/EditPost";

import { get } from "../utils/fetch";

const Feed = () => {
  const [isEditFormOpen, setEditFormOpen] = useState(false);
  const [postAction, setAction] = useState("");
  const [posts, setPosts] = useState([]);
  const [editPostId, setEditPostId] = useState();

  const getAllPost = () => {
    // console.log("getAllPost");
    const response = get("/get-posts");
    response.then((res) => {
      // console.log("res:", res);
      setPosts(res.data);
    });
  };

  useEffect(() => {
    getAllPost();
  }, []);

  const handleOpenModal = (action, postId) => {
    setEditFormOpen(!isEditFormOpen);
    setAction(action);
    // getAllPost();
    if (postId) {
      setEditPostId(postId);
    }
  };

  return (
    <section>
      <Navigation />
      <section className="feed__container">
        <section className="feed__wrapper">
          <div className="feed__addPost--button d-flex justify-content-center mt-3">
            <button
              className="button button-primary"
              onClick={() => handleOpenModal("new")}
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
                  getAllPost={getAllPost}
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
            editPostId={editPostId}
          />
        ) : (
          <></>
        )}
      </section>
    </section>
  );
};

export default Feed;
