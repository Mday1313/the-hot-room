import React from 'react';
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

const Layout = (props) => (
    <>
        <Navbar/>
            {props.children}
        {/* <Footer/> */}
    </>
)

export default Layout;