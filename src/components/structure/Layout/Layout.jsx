import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PageTitle from '../PageTitle/PageTitle';
// import * as styles from './Layout.module.scss';

const Layout = ({id, children}) => {
    return(
        <>
            <Header></Header>
            <PageTitle id={id}></PageTitle>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </>
        
    )
}

export default Layout;