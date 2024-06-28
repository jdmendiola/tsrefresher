import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Play from "./Play";
import Todo from "./Todo";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>David</div>
            </>
          }
        />
        <Route path="/play" element={<Play />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default App;
