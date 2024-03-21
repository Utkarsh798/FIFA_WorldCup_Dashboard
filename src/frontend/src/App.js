import './App.css';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import {HomePage} from "./pages/HomePage";
import {AnimatePresence} from "framer-motion";
import React from "react";
import {WorldCup_Matches_Page} from "./pages/WorldCup_Matches_Page";

function App() {
  return (
    <div className="App">
        <AnimatePresence mode = "wait">
            <Router >
                <Routes >
                    <Route path="/"
                           element={<HomePage />}/>
                    <Route path="/worldcup/:year"
                           element={<WorldCup_Matches_Page />}/>
                </Routes>
            </Router>
        </AnimatePresence>
    </div>
  );
}

export default App;
