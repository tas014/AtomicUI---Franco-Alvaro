import React from 'react';
import Btn from '../Button/styled';

const Button = ({ children, ...props }) => {
    const { primary, used, disabled, error } = props;
    return (
        <Btn primary={primary} used={used} disabled={disabled} error={error}>{children}</Btn>
    )
}

export default Button