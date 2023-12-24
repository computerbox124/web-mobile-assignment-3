import './App.css';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Main from "./components/Main";
import Learning from "./components/Learning/Learning";
import ContactMe from "./components/Contact";


function App() {
  return (
      // Routing
      <Router>
        <Routes>
          // Main page routing
            <Route path="" element={<Main />} />
            <Route path="learning/" element={<Learning />} />
            <Route path="contact-me/" element={<ContactMe />} />
        </Routes>
      </Router>
  );
}

export default App;
