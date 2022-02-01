import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './containers';
import { Navbar } from './components';
import { Home, Mineria, Familia, ErrorPage } from './pages';

import './App.css';

function App() {
    return <Router>
        <Navbar />        
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/mining" element={<Mineria />}/>
                <Route path="/family" element={<Familia />}/>
                <Route path="*" element={<ErrorPage />}/>
            </Routes>        
        <Footer/>
    </Router>;    
}

export default App
