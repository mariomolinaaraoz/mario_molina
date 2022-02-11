import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => {
    return (
        <div className= "gpt3__whatgpt3 section__margin" id="wgpt3">
            <div className="gpt3__whatgpt3-feature">
                <Feature title="Experiencia laboral" text="Mis conocimientos incluyen paquetes de oficina, Autocad, Cypecad, revit, Lumion, todos ellos profundizados gracias a las oportunidades laborales de tuve. Actualmente, me encuentro trabajando en forma independiente a cargo de obras para particulares." />
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">Las posibilidades están más allá de tu imaginación</h1>
                <p>Mas detalles en CV</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title="Sermico s.r.l." text=" Asegurar el correcto abastecimiento a los clientes internos y externos. Realizar, seguimientos de ordenes de solicitudes, ordenes de compra. Planificar las obras, entrega de proveedores externos e internos. Volcado de planificación al sistema Gestion." />
                <Feature title="Consultora y Desarrollo s.r.l." text=" Coordinar con los referentes de las distintas áreas, la maquetación del proyecto. Ensamblar en un único proyecto todos los planos, vistas, escenas, etc para llegar al renderizado final. Crear carpetas de pliegos para los diferentes proveedores, coordinación y planificación con los ganadores." />
                <Feature title="Río Azul Ingeniería s.r.l." text="Generación de planos para fabricación de naves industriales. Generación de listados de materiales, aprovechando los existentes y los listados de compras. Armado de la planificación de fabricación, montaje, con proveedores internos y externos. Generación de planos de montaje, municipales para aprobación y planos para proveedores." />
            </div>
        </div>
    )
}

export default WhatGPT3