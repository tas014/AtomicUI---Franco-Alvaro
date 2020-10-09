import React from 'react';
import { useAuth0 } from '@auth0/auth0-react'
import LoginS from '../Login/styled'

const LoginButton = () =>{
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return(
        !isAuthenticated &&(
           
        <LoginS onClick={()=> loginWithRedirect() }>
            Log In
        </LoginS>
       
    )
)
}

export default LoginButton