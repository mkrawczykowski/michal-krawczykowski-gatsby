import React from 'react';
import * as styles from './Header.module.scss';

const Header = () =>{
    return(
        <header>
            <nav>
            <img src="" className={logo}></img>
            <ul>
                <li><a>link</a></li>
                <li><a>link</a></li>
                <li><a>link</a></li>
                <li><a>link</a></li>
            </ul>
            <button>Contact</button>
            <div className="hamburger"></div>
            </nav>
        </header>
    )
}

export default Header;