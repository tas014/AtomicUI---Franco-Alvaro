import React from 'react';
import Navbar from '../components/Header';
import Fixer from '../containers/styled';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <Fixer>
                {children}
            </Fixer>
        </div>
    )
}

export default Layout