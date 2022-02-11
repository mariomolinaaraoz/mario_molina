import React from 'react';
import { google,slack, atlassian, dropbox,shopify, autocad, revit, cype, lumion } from './imports.js';
import './brand.css';

const Brand = () => (
    <div className="gpt3__brand section__padding">
        <div>
            <img src={autocad} alt="autocad" width="40%" height="auto"/>
        </div>
        <div>
            <img src={revit} alt="revit" width="40%" height="auto"/>
        </div>
        <div>
            <img src={cype} alt="cype" width="40%" height="auto"/>
        </div>
        <div>
            <img src={lumion} alt="lumion" width="40%" height="auto"/>
        </div>        
    </div>
);

export default Brand;