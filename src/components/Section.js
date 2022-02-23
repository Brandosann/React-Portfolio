import React from 'react';
import './styles/Section.scss';
import { Parallax } from 'react-parallax';
import Beach from './img/bkg2.jpg';

const Section = () => {
    return (
        <Parallax className='image' blur={0} bgImage={Beach} strength={800} bgImageStyle={{minHeight:"100vh", minWidth: "100vh"}}>
            <div className='section'>

                <div className="section__container">

                    <div className="section__content">
                        <h1>Who is Brandon</h1>
                        <p>Graduated from NuCamp</p>
                        <p>1 years experience in Programming</p>
                        <p>Javascript Developer</p>
                        <p>React js Developer</p>
                    </div>

                </div>

            </div>
        </Parallax>
    )
}

export default Section
