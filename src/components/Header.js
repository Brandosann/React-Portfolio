import { Close, MenuOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Header.scss';

const Header = () => {

    const [active,setActive] = useState(false);


    const showMenu = () => {
            setActive(!active)
    }

    return (
        <div sticky className='header'>

                    <div className='header__logo'>
                        <h1>Portfolio</h1>
                    </div>

            {/* <nav className={active ? 'navbar active' : 'navbar'}>

                <ul>
                    <div className='closed'>
                        <Close className='close' onClick={showMenu}/>
                    </div>
                    <li>
                        <NavLink to='/Main'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Section'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Works'>Work</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
                </ul>
            </nav> */}

                    <div className='changer'>
                        <MenuOutlined className='menu' onClick={showMenu}/>
                    </div>
                    </div>
    )
}

export default Header
