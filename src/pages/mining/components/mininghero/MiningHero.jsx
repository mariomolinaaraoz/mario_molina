import React from 'react';

import './mininghero.css'

import Crypto from '../../assets/hero-img.png'

import Dash_icon from '../../assets/dash.svg'
import Rvn_icon from '../../assets/rvn.svg'
import Sol_icon from '../../assets/sol.svg'
import Usdt_icon from '../../assets/usdt.svg'
import Xmr_icon from '../../assets/xmr.svg'
import Binance_icon from '../../assets/binancecoin_icon.svg'

const Mining_Hero = () => {
    return (        
        <div className="gpt3__mining section__padding" id="home">
            <div className= "gpt3__mining-content">

                {/* Left Side */}                   
                
                    <div className='left'>
                            <h1 className="gradient__text"> Invierte en cryptomonedas con tus recompensas</h1>
                            <p>Chequea los mineros activos, revisa los ultimos pagos...</p>

                            <div className='input-container'>                                                
                                <input type='email' placeholder='Ingresa tu email' />
                                <button className='btn'>Aprender más</button>
                            </div>

                            <div className='input-accesos'>
                                    <a href="https://www.binance.com/es-LA/my/wallet/account/overview" target="_blank" rel="noreferrer">
                                            <button className='button'> <img src={Binance_icon} alt=''/><p>Binance</p></button>
                                    </a>
                        <a href="https://www.ravenminer.com/wallet/RWEydceQwjzUNsToKRGyb9hFS97nHRa5jF/" target="_blank" rel="noreferrer">
                            <button className='button'> <img src={Rvn_icon} alt=''/><p>Ravenminer</p></button>
                        </a>
                        <a href="https://minexmr.com/dashboard?address=41xvpANcXWvFyauo7aTWSNHYgZxb2FkE2BGFDhwSTXMriua5sM535ZV3jgFkySGhKn5QUVHvSnqvg2uN1YEL6uS68AMwwoB" target="_blank" rel="noreferrer">
                            <button className='button'> <img src={Xmr_icon} alt=''/><p>Monero</p></button>
                        </a> 
                        <a href="https://miningsolana.com/dashboard.php" target="_blank" rel="noreferrer">
                            <button className='button'> <img src={Sol_icon} alt=''/><p>miningsolana</p></button>
                        </a>
                        <a href="https://mervex.biz/mining" target="_blank" rel="noreferrer">
                            <button className='button'> <img src={Dash_icon} alt=''/><p>mervex</p></button>
                        </a>
                        <a href="https://sueldito.com/site/dashboard.php" target="_blank" rel="noreferrer">
                            <button className='button'> <img src={Usdt_icon} alt=''/><p>sueldito</p></button>
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
