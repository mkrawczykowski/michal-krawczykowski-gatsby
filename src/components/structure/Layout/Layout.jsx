import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import * as styles from './Layout.module.scss';

const Layout = ({children}) => {
    return(
        <>
            <Header></Header>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </>
        
    )
}

export default Layout;