import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Shop from "./pages/Shop";
import TimbuCloud from "./pages/TimbuClouds";
function App() {
  return (
    <div className="App container-fluid">
      <Router>
        <Routes>
          <Route path="/" element={<TimbuCloud />} />
          <Route path="/Shop" element={<Shop />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
