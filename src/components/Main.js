import { Email, GitHub, LinkedIn } from '@material-ui/icons';
import React, { useState } from 'react';

import './styles/Main.scss';


const Main = () => {
    return (
            <div className='main'>
                <div className='main__container'>

                    <div className='main__content'>

                        <div className='text'>
                                <p>Hi, My Name Is</p>
                                <h1 className='name'>Brandon Tran</h1>
                                <p>Front End Web & Mobile App Dev</p>

                                <div className='icons'>
                                    <a href='https://github.com/Brandosann?tab=repositories'>
                                        <GitHub className='icon'/>
                                    </a>
                                    <a href='https://www.linkedin.com/in/brandon-tran-535645226/'>
                                        <LinkedIn className='icon'/>
                                    </a>
                                </div>

                        </div>

                    </div>
                    
                </div>
            </div>
    )
}


export default Main