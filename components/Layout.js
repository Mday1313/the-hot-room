import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

const Layout = (props) => (
    <>
        <Head>
            <title>The Hot Room TN</title>
            
        </Head>
        <Navbar/>
            {props.children}
        {/* <Footer/> */}
    </>
)

export default Layout;