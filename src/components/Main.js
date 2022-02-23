import { Email, GitHub, LinkedIn } from '@material-ui/icons';
import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import Sand from './img/bkg1.jpeg';
import './styles/Main.scss';


const Main = () => {
    return (
        <Parallax className='image' blur={0} bgImage={Sand} strength={800} bgImageStyle={{minHeight:"100vh", minWidth: "100vh"}}>
            <div className='main'>
                <div className='main__container'>

                    <div className="main__content">

                        <div className="text">
                                <p>Hi, My Name Is</p>
                                <h1 className="name">Brandon Tran</h1>
                                <p>Front End Web & Mobile App Dev</p>

                                <div className="icons">
                                    <Email className='icon'/>
                                    <GitHub className='icon'/>
                                    <LinkedIn className='icon'/>
                                </div>
                            <div class="text-box">
                            <div class="row">
                                <a class="neon" href="">
                                    <span class="neon-span"></span>
                                    <span class="neon-span"></span>
                                    <span class="neon-span"></span>
                                    <span class="neon-span"></span>
                                    Latest Work
                                </a>
                                <a class="neon" href="">
                                    <span class="neon-span"></span>
                                    <span class="neon-span"></span>
                                    <span class="neon-span"></span>
                                    <span class="neon-span"></span>
                                    Let's Connect
                                </a>
                            </div>

                            </div>

                        </div>

                    </div>
                    
                </div>
            </div>
        </Parallax>
    )
}


export default Main