import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import ScrollToTopButton from './ScrollToTopButton'
const Layout = () => {
    return (
        <div className='Layout'>
            <Header />
            <Outlet />
            <Footer />
            <ScrollToTopButton />
        </div>
    )
}

export default Layout