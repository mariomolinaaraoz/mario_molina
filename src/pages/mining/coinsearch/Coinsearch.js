import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './coinsearch.css';
import Coin from './Coin';

import Crypto1 from '../assets/hero-img.png'

function Coinsearch() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='coin-app'>
        <h1>Mercado de cryptos</h1>
      <div className="coin-search">          
          <input type="email" placeholder="busca tu crypto..." />
          <button type="button"> Get</button>
      </div>
      <div className='coin-table'>      
        {/* Left Side */}
        <div className='left'>
          <div className='heading'>                    
                    <p className='coin-name'>Nombre</p>
                    <p>Símbolo</p>                    
                    <p className='hide-mobile'>Precio</p>
                    <p className='hide-mobile'>24hs.</p>
          </div>
          {filteredCoins.map(coin => {
            return (
              <Coin
                key={coin.id}
                name={coin.name}
                price={coin.current_price}
                symbol={coin.symbol}            
                image={coin.image}
                priceChange={coin.price_change_percentage_24h}
              />          
            );
          })}
        </div>
        {/* Right Side */}
        <div className='right'>
            <div className='img-container'>
                <img src={Crypto1} alt=''/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Coinsearch;