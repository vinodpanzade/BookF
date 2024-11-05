import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import './index.css';

function App() {
    return (
        <Router>
            <div className="container mx-auto p-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                hello    
                </Routes>
            </div>
        </Router>
    );
}

export default App;
