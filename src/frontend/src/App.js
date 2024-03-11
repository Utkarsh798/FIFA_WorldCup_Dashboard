import './App.css';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import {HomePage} from "./pages/HomePage";
import {AnimatePresence} from "framer-motion";

function App() {
  return (
    <div className="App">
        <AnimatePresence mode = "wait">
            <Router >
                <Routes >
                    <Route path="/"
                           element={<HomePage />}/>
                </Routes>
            </Router>
        </AnimatePresence>
    </div>
  );
}

export default App;
