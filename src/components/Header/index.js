import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../Header/styled';
import logo from '../Header/asterik.svg';

const translateURL = id => {
    switch (id) {
        case '/':
            return 1;

        case '/about':
            return 2;

        case '/experiment':
            return 3
    }
    console.log(id)
}

const Navbar = () => {
    let id = useLocation();
    const currentpage = translateURL(id.pathname);

    return (
        <Header Currentpage={currentpage}>
            <div>
                <h1><figure><img src={logo} alt='logo' /></figure></h1>
            </div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/experiment'>Experiment</Link>
            </nav>
        </Header>
    )
}

export default Navbar