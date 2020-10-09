import React from 'react';
import Main from '../MainPage/styled';
import LoginButton from '../Login/LoginButton'
import LogoutButton from '../Logout/LogoutButton'


const Mainpage = () => {
    return (
        <>
        <Main>
            <h1 id="farp">Welcome to <strong>FARP</strong> <span>UI</span></h1>
            <LoginButton/>
            <LogoutButton/>
        </Main>
        </>
    )
}

export default Mainpage