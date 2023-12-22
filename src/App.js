import './App.css';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Main from "./components/Main";
import Learning from "./components/Learning";


function App() {
  return (
      // Routing
      <Router>
        <Routes>
          // Main page routing
            <Route path="" element={<Main />} />
            <Route path="learning/" element={<Learning />} />
        </Routes>
      </Router>
  );
}

export default App;
