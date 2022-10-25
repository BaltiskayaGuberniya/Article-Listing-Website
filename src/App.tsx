import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Switch, BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import New from './New';
        
function App() {
    
    return (
        <div className="App">
        <Navbar/>
            <div className="content">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/new" element={<New/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
