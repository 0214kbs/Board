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
            // <tr key={board.idx}>
            <tr key={board.idx} onClick={() => BoardDetail(idx)}>
              <td>{board.idx}</td>
              <Link to={`/board/${board.idx}`}>{board.title}</Link>
              <td>{board.createdBy}</td>
              <td>{board.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <ul>
        {boardList.map((board) => (
          <li key={board.idx}>
            <Link to={`/board/${board.idx}`}>{board.title}</Link>
          </li>
        ))}
      </ul> */}
    </>
  );
};

export default BoardList;
