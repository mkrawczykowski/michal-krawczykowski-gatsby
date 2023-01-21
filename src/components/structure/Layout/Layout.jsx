import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PageTitle from '../PageTitle/PageTitle';
// import * as styles from './Layout.module.scss';

const Layout = ({children, page}) => {
    return(
        <>
            <Header></Header>
            <PageTitle page={page}></PageTitle>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </>
        
    )
}

export default Layout;