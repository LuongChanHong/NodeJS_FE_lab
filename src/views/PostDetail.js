import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navigation from "../components/Navigation";
import PostImage from "../components/PostImage";

import { get } from "../utils/fetch";

const PostDetail = () => {
  const [post, setPost] = useState({});
  const [postErr, setPostErr] = useState();

  const { id } = useParams();
  // console.log("id:", id);

  useEffect(() => {
    const getPost = () => {
      const response = get(`/get-post/?id=${id}`);
      response
        .then((res) => {
          console.log("res:", res);
          // const _updatedAt = new Date(res.data.updatedAt);
          // const _post = { ...res.data, updatedAt: _updatedAt };
          setPost(res.data);
        })
        .catch((err) => {
          // console.log("err:", err.response.data);
          setPostErr(err.response.data.msg);
        });
    };
    getPost();
  }, []);
  return (
    <section>
      <Navigation />
      <section className="postDetail__container mt-3">
        <section className="postDetail__wrapper d-flex flex-column align-items-center">
          {postErr ? (
            <h1 className="text-danger">{postErr}</h1>
          ) : (
            <>
              <section className="postDetail__content"></section>
              <h3>{post.title}</h3>
              <p>Posted on {post.date}</p>
              <PostImage url={post.image} size={"big"} />
              <article>{post.content}</article>
            </>
          )}
        </section>
      </section>
    </section>
  );
};

export default PostDetail;
