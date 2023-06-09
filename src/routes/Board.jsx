import React from "react";
import BoardList from "../components/BoardList";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1> 게시판 </h1>
      <BoardList />
      <div>
        <button onClick={() => navigate("/insert")}>글쓰기</button>
      </div>
    </div>
  );
};

export default Board;
