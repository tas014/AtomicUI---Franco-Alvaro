import React from 'react';

const Button = ({ children, props }) => {
    const { primary, used, disabled, error } = props;
    return (
        <Btn primary={primary} used={used} disabled={disabled} error={error}>{children}</Btn>
    )
}

export default Button