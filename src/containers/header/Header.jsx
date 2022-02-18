import React from 'react';
import { useState } from "react";
import { db } from "../../firebase-config"
import { collection, addDoc } from "firebase/firestore";
import cv_pdf_file from '../../assets/CV - Mario Molina Autocad - Revit.pdf';
import { saveAs } from "file-saver";

import './header.css';

const Header = () => {
    
//BAJADA DE PDF
    const saveFile = () => { saveAs( cv_pdf_file, 'CV - Mario Molina Autocad - Revit.pdf' )};

//DEFINICION ORMULARIO DE CONTACTO
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");    

    const [loader, setLoader] = useState(false);
    const usersCollectionRef = collection(db, "datausers");

    const createUser = async () => {
      await addDoc(usersCollectionRef, { name: name, company: company, email: email }); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);        

        createUser()
          .then(() => {
            setLoader(false);
            alert("Your message has been submitted👍");
          })
          .catch((error) => {
            alert(error.message);
            setLoader(false);
          });    

    setName("");
    setCompany("");
    setEmail("");
    saveFile(); //DOWNLOAD cv_pdf_file
    };


return(    
    <div className="gpt3__header section__padding" id="home">
        <div className= "gpt3__header-content">        
            <h1 className="gradient__text"> Con los pies en la tierra y la mirada en el cielo...</h1>
            <p>Bienvenidos a mi sitio personal, me presento, mi nombre es Armando Mario Molina Araoz, tengo 43 años y les dejo una a continuación una breve reseña sobre mi desarrollo personal y laboral.</p>
            
            <form className="form" onSubmit={handleSubmit}>
                    <input placeholder='Nombre y apellido...' required value={name} onChange={(e) => setName(e.target.value)}/>

                    <input placeholder='Empresa...' required value={company} onChange={(e) => setCompany(e.target.value)}/>

                    <input placeholder='Email...' required value={email} onChange={(e) => setEmail(e.target.value)}/>

                    <button type="submit">Obtener CV - Mario Molina</button>
            </form>

            <p>Entre mis aptitudes, cuento con mas 15 años como responsable de oficina tecnica, donde pude asimilar conocimientos a lo largo del desarrollo de diferentes obras reales, diseñadas, planificadas y ejecutas en un ambiente de maquetación.</p>
            <p>Herramientas que manejo actualmente: </p>
        </div>
    </div>
  );
};

export default Header;