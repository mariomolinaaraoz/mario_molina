import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Footer } from './containers';
import { Home, Mineria, Coinsearch, Familia, ErrorPage } from './pages';

import './App.css';

export default function App() {
    return (        
        <BrowserRouter>        
            <Navbar/>
            <Routes>
                <Route path='/mario_molina/' element={<Home />}/>
                <Route path="/mario_molina/mining" element={<Mineria />}/>
                <Route path="/mario_molina/mining/coinsearch" element={<Coinsearch />}/>                
                <Route path="/mario_molina/family" element={<Familia />}/>
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}