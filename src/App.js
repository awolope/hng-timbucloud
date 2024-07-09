import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TimbuCloud from "./pages/TimbuClouds";
function App() {
  return (
    <div className="App container-fluid sm">
      <Router>
        <Routes>
          <Route path="/" element={<TimbuCloud />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
