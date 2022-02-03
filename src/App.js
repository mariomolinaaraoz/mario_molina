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
                <Route path='http://mariomolinaaraoz.github.io/mario_molina/' element={<Home />}/>
                <Route path="http://mariomolinaaraoz.github.io/mario_molina/mining" element={<Mineria />}/>
                <Route path="http://mariomolinaaraoz.github.io/mario_molina/family" element={<Familia />}/>
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}