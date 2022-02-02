import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Footer } from './containers';
import { Navbar } from './components';
import { Home, Mineria, Familia, ErrorPage } from './pages';

import './App.css';

function App() {
    return <Router>
        <Navbar />        
        <Routes>
            <Route exact path='/mario_molina/' element={<Home />}/>
            <Route exact path="/mario_molina/mining" element={<Mineria />}/>
            <Route exact path="/mario_molina/family" element={<Familia />}/>
            <Route path="*" element={<ErrorPage />}/>
        </Routes>                
        <Footer/>
    </Router>;    
}

export default App
