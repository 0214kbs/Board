/* eslint-disable */
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Board from "./components/Board";
function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="/board" element={<Board />} />
      </Route>
    </Routes>
  );
  // return (
  //   <div className="App">
  //     <NavBar></NavBar>
  //     <Header></Header>
  //     <Footer></Footer>
  //   </div>
  // );
}

export default App;
