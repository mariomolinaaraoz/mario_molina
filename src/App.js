import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { Footer } from './containers';
import { Home, Mineria, Familia, ErrorPage } from './pages';

import './App.css';

export default function App() {
    return (        
        <BrowserRouter>        
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path="/mining" element={<Mineria />}/>
                <Route path="/family" element={<Familia />}/>
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}