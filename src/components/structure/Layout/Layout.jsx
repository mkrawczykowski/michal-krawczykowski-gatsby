import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PageTitle from '../PageTitle/PageTitle';
// import * as styles from './Layout.module.scss';

const Layout = ({children}) => {
    return(
        <>
            <Header></Header>
            {children}
            <Footer></Footer>
        </>
    )
}

export default Layout;