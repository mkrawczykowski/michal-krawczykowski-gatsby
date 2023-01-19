import React from 'react';
import {Link} from 'gatsby';
import {Container, Row, Col} from '../../structure/Grid/Grid';
import {StaticImage} from 'gatsby-plugin-image';
import * as styles from './Header.module.scss';

const Header = () => {
    return(
        <header>
            <Container>
                <nav>
                    <Link to="/"><StaticImage src="../../../images/krawczykowski-logo.svg" alt="Michael Krawczykowski's blog - logo" /></Link>
                    {/* <ul>
                        <li></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">My websites</Link></li>
                    </ul> */}
                    <button>Contact</button>
                    <div className="hamburger"></div>
                </nav>    
            </Container>

        </header>
    )
}

export default Header;