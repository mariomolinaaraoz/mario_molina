import React from 'react';

import { Possibility, Features, WhatGPT3, Header } from '../../containers';
import { CTA, Brand } from '../../components';

import './home.css';

const Home = () => (
  <div className="Home">
    <div className="gradient__bg">      
      <Header />
    </div>
    <Brand/>
    <WhatGPT3 />
        
  </div>
);

export default Home;