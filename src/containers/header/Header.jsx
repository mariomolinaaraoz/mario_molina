import React from 'react';
import './header.css';
import archivo from '../../assets/CV - Mario Molina Autocad - Revit.pdf';

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className= "gpt3__header-content">
                <h1 className="gradient__text"> Con los pies en la tierra y la mirada en el cielo...</h1>
                <p>Bienvenidos a mi sitio personal, me presento, mi nombre es Armando Mario Molina Araoz, tengo 43 años y les dejo una a continuación una breve reseña sobre mi desarrollo personal y laboral.</p>

                <div className="gpt3__header-content__input">
                    <a href={archivo} className="btn btn-primary" download>Obtener CV - Mario Molina</a>
                </div>
                <p>Entre mis aptitudes, cuento con mas 15 años como responsable de oficina tecnica, donde pude asimilar conocimientos a lo largo del desarrollo de diferentes obras reales, diseñadas, planificadas y ejecutas en un ambiente de maquetación.</p>
                <p>Herramientas que manejo actualmente: </p>
                
                <div className="gpt3__header-content__people">                    
                        
                </div>
            </div>
            <div className="gpt3__header-image">
                
            </div>
        </div>
    )
}

export default Header