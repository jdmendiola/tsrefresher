import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Play from "./Play";
import ToDoApp from "./ToDoApp";

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
        <Route path="/apptest" element={<ToDoApp />} />
      </Routes>
    </Router>
  );
}

export default App;
