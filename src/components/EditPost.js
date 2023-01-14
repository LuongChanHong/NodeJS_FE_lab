import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

import "../css/main.css";

const EditPost = (props) => {
  const [isModalOpen, setModalOpen] = useState(props.isOpen);
  //   const [isModalOpen, setModalOpen] = useState(props.isOpen);
  const [postContent, setContent] = useState({
    title: "",
    content: "",
  });

  const onChange = (event) => {
    let target = event.target.name;
    let value = event.target.value;
    setContent({ ...postContent, [target]: value });
  };

  const editPost = (e) => {
    e.preventDefault();
  };

  const createPost = (e) => {
    e.preventDefault();
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
            <Modal.Title className="">New Post</Modal.Title>
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
              <input type="file" name="image" />
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
                onClick={(e) => editPost(e)}
              >
                Edit
              </button>
            ) : (
              <button
                className="button button-primary"
                onClick={(e) => createPost(e)}
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
