import React from 'react';
import ui from './img/ui.jpg';
import wd2 from './img/wd2.jpg';
import wd4 from './img/wd4.jpg';
import camp from './img/camp.jpg';
import './styles/Works.scss';

const Works = () => {
    return (
    <div>
        <h1 className='header1'>My Work</h1>
        <div className='works'>
            <div className='work__section'>
                <div className='cards'>
                    <img src={ui} alt='Digital Planner' />
                    <a href='https://github.com/Brandosann/Digital-Planner'>
                        <button>Digital Planner</button>
                    </a>
                </div>

                <div className='cards'>
                    <img src={wd2} alt='Poke App'/>
                    <a href='https://github.com/Brandosann/Poke-App'>
                        <button>Poke App</button>
                    </a>
                </div>

                <div className='cards'>
                    <img src={wd4} alt='JS Portfolio Project' />
                    <a href='https://github.com/Brandosann/Portfolio'>
                        <button>JS Portfolio Work In Progress</button>
                    </a>
                </div>

                <div className='cards'>
                    <img src={camp} alt='NuCamp React Project' />
                    <a href='https://github.com/Brandosann/NuCamp-React'>
                        <button>NuCamp React Project</button>
                    </a>
                </div>

            </div>
        </div>
    </div>
    )
}

export default Works
