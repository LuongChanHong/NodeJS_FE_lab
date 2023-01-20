import React, { useState, useEffect } from "react";
import openSocket from "socket.io-client";

import Navigation from "../components/Navigation";
import PostItem from "../components/PostItem";
import EditPost from "../components/EditPost";

import { get } from "../utils/fetch";

const Feed = () => {
  const [isEditFormOpen, setEditFormOpen] = useState(false);
  const [postAction, setAction] = useState("");
  const [posts, setPosts] = useState([]);
  const [editPostId, setEditPostId] = useState();

  const handleSocketIO = () => {
    console.log("handleSocketIO");
    const socket = openSocket("http://localhost:5000", {
      transports: ["websocket"],
    });
    socket.on("posts", (data) => {
      if (data.action === "newPost") {
        setPosts((prevState) => {
          const _posts = [...prevState];
          // _posts.pop();
          _posts.unshift(data.post);
          // _posts.splice(1, 1);
          console.log("_posts:", _posts);
          return _posts;
        });
      } else if (data.action === "updatePost") {
        setPosts((prevState) => {
          const _posts = [...prevState];
          const index = _posts.findIndex((post) => post._id === data.post._id);
          if (index > -1) {
            _posts[index] = data.post;
          }
          return _posts;
        });
      } else if (data.action === "deletePost") {
        getAllPost();
      }
    });
  };

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
    handleSocketIO();
  }, []);

  const handleOpenModal = (action, postId) => {
    setEditFormOpen(!isEditFormOpen);
    setAction(action);
    getAllPost();

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
