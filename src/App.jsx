import Home from "./Pages/Home";
import AddUpdate from "./Pages/AddUpdate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/css/button.css";
import "./assets/css/input.css";

function App() {
  return (
    /* Routing diatur disini*/
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addUpdate" element={<AddUpdate />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
