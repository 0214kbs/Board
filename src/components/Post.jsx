import React from "react";

const Post = (props) => {
  return (
    <>
      <div>게시판 상세 보기</div>
      <h2>{props.title}</h2>
      <h4>{props.createdBy}</h4>
      <hr />
      <p> {props.contents}</p>
    </>
  );
};

export default Post;
