import React from 'react';
import {Link} from 'gatsby';
import {Container, Row, Col} from '../../structure/Grid/Grid';
import {StaticImage} from 'gatsby-plugin-image';
import * as styles from './Header.module.scss';
import MainMenu from '../MainMenu/MainMenu';

const Header = () => {
    return(
        <header className={styles.header}>
            <Container>
                <nav className={styles.header__mainNav}>
                    <Link to="/"><StaticImage src="../../../images/krawczykowski-logo.svg" alt="Michael Krawczykowski's blog - logo" /></Link>
                    <MainMenu></MainMenu>
                </nav>    
            </Container>
        </header>
    )
}

export default Header;