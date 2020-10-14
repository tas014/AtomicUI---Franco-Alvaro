import React from 'react'
import Centercontainer from '../Authstyles/styled'

const AuthStyles = (props) => {
    return (
        <Centercontainer>
            {props.children}
        </Centercontainer>
    )
}

export default AuthStyles