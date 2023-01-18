import React from "react";

const PostImage = (props) => {
  return (
    <img
      style={{
        backgroundImage: `url(http://localhost:5000/${props.url})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        width: `${props.size === "big" ? "30rem" : "10rem"}`,
        height: `${props.size === "big" ? "30rem" : "10rem"}`,
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default PostImage;
