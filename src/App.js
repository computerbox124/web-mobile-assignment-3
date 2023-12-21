import './App.css';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Main from "./components/Main";


function App() {
  return (
      // Routing
      <Router>
        <Routes>
          // Main page routing
          <Route path="" element={<Main />} />
        </Routes>
      </Router>
  );
}

export default App;
