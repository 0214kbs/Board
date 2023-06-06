import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Post from "../components/Post";

const BoardDetail = () => {
  // const url = "http://localhost:8080/board/";
  const { idx } = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const getPost = async () => {
    const response = await axios.get(`//localhost:8080/board/${idx}`);
    setPost(response.data.data);
    setLoading(false);
  };

  useEffect(() => {
    getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(loading);
  return (
    <div>
      {loading ? <h2> 로딩중 </h2> : <Post idx={post.idx} title={post.title} contents={post.contents} createdBy={post.createdBy} />}
    </div>
  );
};

export default BoardDetail;
