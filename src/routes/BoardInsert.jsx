/* eslint-disable */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MDEditor from "@uiw/react-md-editor";

const BoardInsert = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    createdBy: "",
    contents: "",
  });

  const [text, setText] = useState("");
  const { title, createdBy, contents } = post;
  const onChangeMD = (value, event) => {
    console.log(value, event);
    setText(value);
  };
  const onChange = (event) => {
    const { value, name } = event.target;

    const postInputs = {
      ...post,
      [name]: value,
    };
    setPost({ postInputs });
  };

  const savePost = async () => {
    await axios.post(`//localhost:8080/board`, post).then(() => {
      navigate("/board");
    });
  };

  // 나중에 글 수정 -> 페이지 들어온 시간 말고 페이지 저장 시간 불러와서 수정
  const [curDate, setCurDate] = useState(new Date());
  //   const timeString = `${curDate.getFullYear()}/${
  //     curDate.getMonth() + 1
  //   }/${curDate.getDate()} ${curDate.getHours()}:${curDate.getMinutes()}:${curDate.getSeconds()}`;
  const timeString = `${curDate.toLocaleDateString()} ${curDate.toLocaleTimeString()}`;
  return (
    <>
      <div>
        <span> 제목 </span>
        <input type="text" name="title" value={title} onChange={onChange} />
        {/* <span> 작성자 </span>
        <input type="text" name="createdBy" value={createdBy} onChange={onChange} /> */}
        <span> {timeString} </span>
        <span>
          {/* style={{ textAlign: "right" }} */}
          <button> AutoC</button>
          <button onClick={savePost}>저장</button>
          <button onClick={() => navigate("/board")}>취소</button>
        </span>
      </div>
      <br />

      {/* 내용 */}
      <div>
        <MDEditor
          name="contents"
          height={608}
          value={text}
          onChange={(value, event) => {
            onChangeMD(value, event);
          }}
          //   preview="edit"
        />
      </div>
    </>
  );
};

export default BoardInsert;
