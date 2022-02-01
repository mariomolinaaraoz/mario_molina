import React from 'react';

import { Blog, Possibility, Features, WhatGPT3, Header } from '../../containers';
import { CTA, Brand } from '../../components';

import './home.css';

const Home = () => (
  <div className="Home">
    <div className="gradient__bg">      
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />    
  </div>
);

export default Home;