import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../Header/styled';
import logo from '../Header/logo.png'

const Navbar = () => {
    let { id } = useParams()

    return (
        <Header>
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