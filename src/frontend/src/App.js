import './App.css';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import {HomePage} from "./pages/HomePage";
import {AnimatePresence} from "framer-motion";
import React from "react";
import {WorldCupPage} from "./pages/WorldCupPage";

function App() {
  return (
    <div className="App">
        <AnimatePresence mode = "wait">
            <Router >
                <Routes >
                    <Route path="/"
                           element={<HomePage />}/>
                    <Route path="/worldcup/allMatches/:year"
                           element={<WorldCupPage />}/>
                </Routes>
            </Router>
        </AnimatePresence>
    </div>
  );
}

export default App;
