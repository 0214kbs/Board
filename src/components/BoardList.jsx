/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BoardList = () => {
  const [boardList, setBoardList] = useState([]);
  const url = "http://localhost:8080/";

  const getBoardList = async () => {
    const response = await axios.get(url + "board");
    setBoardList(response.data.data);
    console.log(response.data);

    const page = response.data.pagination;
    // console.log(page);
  };

  const navigate = useNavigate();
  useEffect(() => {
    getBoardList();
  }, []);

  console.log(boardList);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일시</th>
          </tr>
        </thead>
        <tbody>
          {boardList.map((board) => (
            <tr key={board.idx} style={{ cursor: "pointer" }} onClick={() => navigate(`/board/${board.idx}`)}>
              <td>{board.idx}</td>
              <td>{board.title}</td>
              <td>{board.createdBy}</td>
              <td>{board.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BoardList;
