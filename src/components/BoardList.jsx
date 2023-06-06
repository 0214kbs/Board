/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BoardList = () => {
  const [boardList, setBoardList] = useState([]);
  const url = "http://localhost:8080/";

  const getBoardList = async () => {
    const response = await axios.get(url + "board");
    setBoardList(response.data.data);

    const page = response.data.pagination;
    console.log(page);
  };

  useEffect(() => {
    getBoardList();
  }, []);

  console.log(boardList);

  return (
    <>
      <div>게시판 목록</div>
      <ul>
        {boardList.map((board) => (
          <li key={board.idx}>
            <Link to={`/board/${board.idx}`}>{board.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BoardList;