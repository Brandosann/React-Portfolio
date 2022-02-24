import React from 'react';
import ui from './styles/ui.jpg';
import wd2 from './styles/wd2.jpg';
import wd4 from './styles/wd4.jpg';
import './styles/Works.scss';
import { Parallax } from 'react-parallax';
import Water from './img/bkg3.jpg';

const Works = () => {
    return (
        <Parallax className='image' blur={0} bgImage={Water} strength={2000} bgImageStyle={{minHeight:'100vh', minWidth: '100vh'}}>
            <div className='works'>
                <div className="work__section">


                    <div className="cards">
                        <img src={ui} alt="" />
                        <a href='https://github.com/Brandosann/Digital-Planner'>
                            <button>Digital Planner</button>
                        </a>
                    </div>

                    <div className="cards">
                        <img src={wd2} alt=""/>
                        <a href='https://github.com/Brandosann/Poke-App'>
                            <button>Poke App</button>
                        </a>
                    </div>

                    <div className="cards">
                        <img src={wd4} alt="" />
                        <a href='https://github.com/Brandosann/Portfolio'>
                            <button>JS Portfolio Work In Progress</button>
                        </a>
                    </div>

                </div>
            </div>
        </Parallax>
    )
}

export default Works
