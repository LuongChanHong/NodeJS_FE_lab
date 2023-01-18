import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

import "../css/main.css";

import PostImage from "./PostImage";

import { formDataPost, get } from "../utils/fetch";

const EditPost = (props) => {
  const [isModalOpen, setModalOpen] = useState(props.isOpen);
  const [ErrMess, setErrMess] = useState();
  const [postContent, setContent] = useState({
    title: "",
    content: "",
    image: "",
  });

  useEffect(() => {
    if (props.postAction === "edit") {
      const getPost = () => {
        const response = get(`/get-post/?id=${props.editPostId}`);
        response.then((res) => {
          // console.log("res.data:", res.data);
          setContent(res.data);
        });
      };
      getPost();
    }
  }, []);

  const navigate = useNavigate();

  const onChange = (event) => {
    let target = event.target.name;
    let value = event.target.files ? event.target.files[0] : event.target.value;
    setContent({ ...postContent, [target]: value });
  };

  const handlePost = (e) => {
    const url = props.postAction === "edit" ? "/edit-post" : "/create-new-post";
    try {
      const formData = new FormData();
      for (let key in postContent) {
        formData.append(`${key}`, postContent[`${key}`]);
      }
      const response = formDataPost(url, formData);
      // console.log("response:", response);
      response.then((res) => {
        // console.log("res:", res);
        if (res.data.length > 0) {
          setErrMess(res.data);
        } else {
          console.log("run");
          props.handleOpenModal();
        }
      });
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <section className="editPost__container">
      <section className="editPost__warpper">
        <Modal
          show={isModalOpen}
          onHide={() => props.handleOpenModal()}
          // backdrop="static"
          // keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {props.postAction === "edit" ? "Edit Post" : "New Post"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex flex-column mt-2">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                name="title"
                value={postContent.title}
                onChange={(event) => onChange(event)}
              />
            </div>
            <div className="d-flex flex-column mt-2">
              <label htmlFor="image">Image:</label>
              <input
                type="file"
                name="image"
                // value={postContent.image}
                onChange={(event) => onChange(event)}
              />
            </div>

            <div className="d-flex flex-column mt-2">
              <label htmlFor="content">Content:</label>
              <textarea
                rows="4"
                cols="50"
                name="content"
                value={postContent.content}
                onChange={(event) => onChange(event)}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="button button-primary"
              onClick={() => props.handleOpenModal()}
            >
              Cancel
            </button>
            {props.postAction === "edit" ? (
              <button
                className="button button-primary"
                onClick={(e) => handlePost(e)}
              >
                Edit
              </button>
            ) : (
              <button
                className="button button-primary"
                onClick={(e) => handlePost(e)}
              >
                Create New Post
              </button>
            )}
          </Modal.Footer>
        </Modal>
      </section>
    </section>
  );
};

export default EditPost;
