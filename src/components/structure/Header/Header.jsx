import React from 'react';
import {Link} from 'gatsby';
import * as styles from './Header.module.scss';

const Header = () => {
    return(
        <header>
            <nav>
            <img src=""></img>
            <ul>
                <li><Link to="/"></Link></li>
                <li><Link to="/blog"></Link></li>
                <li><Link to="/contact"></Link></li>
            </ul>
            <button>Contact</button>
            <div className="hamburger"></div>
            </nav>
        </header>
    )
}

export default Header;