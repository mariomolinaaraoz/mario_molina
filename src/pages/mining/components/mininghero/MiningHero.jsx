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
        <div className='hero'>
            <div className='container'>
                {/* Left Side */}
                <div className='left'>
                    <p>Chequea los mineros activos, revisa los ultimos pagos...</p>
                    <h1>Invierte en cryptomonedas con tus recompensas.</h1>
                    <p>Compra, vende, y guarda cientos de monedas</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Ingresa tu email' />
                        <button className='btn'>Aprender más</button>
                    </div>
                    <div className='input-accesos'>
                        <a href="https://www.binance.com/es-LA/my/wallet/account/overview" target="_blank" rel="noreferrer">
                            <button className='btn1'> <img src={Binance_icon} alt='' width={30} height={30} /><p>&nbsp;&nbsp; Binance</p></button>
                        </a>
                        <a href="https://www.ravenminer.com/wallet/RWEydceQwjzUNsToKRGyb9hFS97nHRa5jF/" target="_blank" rel="noreferrer">
                            <button className='btn1'> <img src={Rvn_icon} alt='' width={30} height={30} /><p>&nbsp;&nbsp; Ravenminer </p></button>
                        </a>
                        <a href="https://minexmr.com/dashboard?address=41xvpANcXWvFyauo7aTWSNHYgZxb2FkE2BGFDhwSTXMriua5sM535ZV3jgFkySGhKn5QUVHvSnqvg2uN1YEL6uS68AMwwoB" target="_blank" rel="noreferrer">
                            <button className='btn1'> <img src={Xmr_icon} alt='' width={30} height={30} /><p>&nbsp;&nbsp; MinerXMR </p></button>
                        </a> 
                        <a href="https://miningsolana.com/dashboard.php" target="_blank" rel="noreferrer">
                            <button className='btn1'> <img src={Sol_icon} alt='' width={30} height={30} /><p>&nbsp;&nbsp; miningsolana.com </p></button>
                        </a>
                        <a href="https://mervex.biz/mining" target="_blank" rel="noreferrer">
                            <button className='btn1'> <img src={Dash_icon} alt='' width={30} height={30} /><p>&nbsp;&nbsp; mervex.biz </p></button>
                        </a>
                        <a href="https://sueldito.com/site/dashboard.php" target="_blank" rel="noreferrer">
                            <button className='btn1'> <img src={Usdt_icon} alt='' width={30} height={30} /><p>&nbsp;&nbsp; sueldito.com </p></button>
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
