import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../Header/styled';
import Logo from '../Logo';
import { useAuth0 } from '@auth0/auth0-react'

const translateURL = id => {

    switch (id) {
        case '/':
            return 1;

        case '/about':
            return 2;

        case '/experiment':
            return 3;

        case '/lista':
            return 4
    }
    console.log(id)
}

const Navbar = () => {
    let id = useLocation();
    const currentpage = translateURL(id.pathname);
    const { isAuthenticated } = useAuth0();

    return (
       
        isAuthenticated &&(
        <Header Currentpage={currentpage}>
            <Logo />
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/experiment'>Experiment</Link>
                <Link to='/lista'>Lista</Link>


            </nav>
        </Header>
    )
 )
}

export default Navbar