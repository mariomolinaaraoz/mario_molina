import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import { Navbar } from './components';
import { Footer } from './containers';
import { Home, Mineria, Coinsearch, Familia, Tareas, ErrorPage } from './pages';

import './App.css';

export default function App() {
    return (        
        <BrowserRouter>        
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path="/mining" element={<Mineria />}/>
                <Route path="/mining/coinsearch" element={<Coinsearch />}/>                
                <Route path="/family" element={<Familia />}/>
                <Route path="/tasks" element={<Tareas />}/>
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}