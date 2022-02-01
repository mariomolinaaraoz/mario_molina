import React from 'react'
import errorpageimg from '../../assets/errorpage.jpg';

import './errorpage.css';

const ErrorPage = () => (
    <div className="ErrorPage">
        <div className= "gpt3__header-content">            
            <p>Página no encontrada en el serdidor...</p>
        </div>
        <div className="gpt3__errorpage-image">
            <img src={errorpageimg} alt="errorpageimg" />
        </div>
        
    </div>
);

export default ErrorPage
