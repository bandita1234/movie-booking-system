import logo from "./logo.svg";
import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Summary from "./pages/Summary";
import Ticket from "./pages/Ticket";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show/:id" element={<Summary />} />
          <Route path="/book/:id" element={<Ticket/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
