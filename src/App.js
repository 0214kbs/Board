/* eslint-disable */
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./routes/NavBar";
import Home from "./routes/Home";
import Board from "./routes/Board";
import BoardDetail from "./routes/BoardDetail";
import BoardInsert from "./routes/BoardInsert";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:idx" element={<BoardDetail />} />
        <Route path="/insert" element={<BoardInsert />} />
      </Route>
    </Routes>
  );
}

export default App;
