import React from 'react';
import { useAuth0 } from '@auth0/auth0-react'
import LogoutS from '../Logout/styled'

const LogoutButton = () =>{
    const { logout, isAuthenticated } = useAuth0();

    return(
        isAuthenticated &&(
          
        <LogoutS onClick={()=> logout() }>
            Log Out
        </LogoutS>
       

    )
)
}

export default LogoutButton