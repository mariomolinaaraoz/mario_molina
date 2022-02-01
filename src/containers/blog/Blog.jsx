import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">De la unión de Cintia y Mario, <br /> se formo una hermosa familia, Los "VIDES MOLINAS ARAOZ".</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Desde siempre..." text="Desde que estuvimos juntos, nos propusimos ser amigos inseparables, amantes fogosos y socios fundadores de esta hermosa familia."/>        
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="19 de Abril,2000" text="Lourdes, comienza a agrandar la familia, como es la primera tambien es la preferida de mamá!" />
        <Article imgUrl={blog03} date="5 de Enero, 2006" text="Dios quiso que nacieras varon, por justo al medio de la trilogia, desde pequeño siempre agradeciste este lugar, ayudando y aprendiendo en casa." />
        <Article imgUrl={blog04} date="3 de Mayo, 2007" text="Dicen que el ultimo no es esperado, pero en tu caso no es asi... aunque te falta darte cuenta cuanto amor te rodea." />
        <Article imgUrl={blog05} date="26 de Febrero, 1983" text="Sin saberlo, nacio una mujer unica, capaz de dar todo, amar como perra y ser los cimientos de la familia." />
      </div>
    </div>
  </div>
);

export default Blog;