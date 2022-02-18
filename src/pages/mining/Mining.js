import React from 'react'
import { MiningFeatured, MiningHero } from './components';

function Mineria() {
  return (    
      <div className="Mining">
          <div className="gradient__bg">      
            <MiningHero />
      </div>
      <MiningFeatured/>        
  </div>
  );
}

export default Mineria;