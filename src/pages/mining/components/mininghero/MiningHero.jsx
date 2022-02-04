import React from 'react';

import './mininghero.css'

import Crypto from '../../assets/hero-img.png'

import Miner_icon from '../../assets/miner_icon.svg'
import Binance_icon from '../../assets/binancecoin_icon.svg'

const Mining_Hero = () => {
    return (        
        <div className='hero'>
            <div className='container'>
                {/* Left Side */}
                <div className='left'>
                    <p>Chequea los mineros activos, revisa los ultimos pagos...</p>
                    <h1>Invierte en cryptomonedas con tus recompensas.</h1>
                    <p>Compra, vende, y guarda ciemtps de monedas</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Ingresa tu email' />
                        <button className='btn'>Aprender más</button>
                    </div>
                    <div className='input-accesos'>
                        <a href="https://www.binance.com/es-LA/my/wallet/account/overview" target="_blank" rel="noreferrer">
                            <button className='btn1'> <img src={Binance_icon} alt='' width={30} height={30} /><p>&nbsp;&nbsp; Binance</p></button>
                        </a>
                        <a href="https://www.ravenminer.com/wallet/RWEydceQwjzUNsToKRGyb9hFS97nHRa5jF/" target="_blank" rel="noreferrer">
                            <button className='btn1'> <img src={Miner_icon} alt='' width={30} height={30} /><p>&nbsp;&nbsp; Ravenminer </p></button>
                        </a>
                        <a href="https://minexmr.com/dashboard?address=41xvpANcXWvFyauo7aTWSNHYgZxb2FkE2BGFDhwSTXMriua5sM535ZV3jgFkySGhKn5QUVHvSnqvg2uN1YEL6uS68AMwwoB" target="_blank" rel="noreferrer">
                            <button className='btn1'> <img src={Miner_icon} alt='' width={30} height={30} /><p>&nbsp;&nbsp; MinerXMR </p></button>
                        </a>                        
                    </div>
                </div>
                {/* Right Side */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={Crypto} alt=''/>
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default Mining_Hero
