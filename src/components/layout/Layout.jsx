import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/Footer';
import React from 'react';

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout

