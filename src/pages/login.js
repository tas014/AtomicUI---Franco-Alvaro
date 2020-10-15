import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../components/Login/LoginButton';
import LogoutButton from '../components/Logout/LogoutButton';
import { Link, useLocation } from 'react-router-dom';
import AuthStyles from '../components/Authstyles'

const LogPage = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <AuthStyles>
            <LoginButton />
            <LogoutButton />
        </AuthStyles>
    )
}

export default LogPage