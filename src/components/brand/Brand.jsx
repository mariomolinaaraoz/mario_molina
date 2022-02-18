import React from 'react';
import { autocad, revit, cype, lumion } from './imports.js';
import './brand.css';

const Brand = () => (
    <div className="section__padding_mario">
        <div>
            <img src={autocad} alt="autocad"/>
        </div>
        <div>
            <img src={revit} alt="revit"/>
        </div>
        <div>
            <img src={cype} alt="cype"/>
        </div>
        <div>
            <img src={lumion} alt="lumion"/>
        </div>        
    </div>
);

export default Brand;