import React from 'react';
import { H1, H2, H3, H4, H5, H6 } from '../Titles/styled'

const Title = ({ children, props }) => {
    //Aca se pueden agregar todos los atributos que quieras
    const { type, primary } = props;

    switch (type) {
        case 'h1':
            return (<H1 primary={primary}>{children}</H1>)
                ;

        case 'h2':
            return (<H2 primary={primary}>{children}</H2>)
                ;

        case 'h3':
            return (<H3 primary={primary}>{children}</H3>)
                ;

        case 'h4':
            return (<H4 primary={primary}>{children}</H4>)
                ;

        case 'h5':
            return (<H5 primary={primary}>{children}</H5>)
                ;

        case 'h6':
            return (<H6 primary={primary}>{children}</H6>)

        default:
            return (<H1 primary={true}>{children}</H1>);
    }
}

export default Title