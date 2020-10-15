import React from 'react';
import Sliding from '../Sliding/styled';

const SlideArticle = ({ children, ...props }) => {

    return (
        <Sliding isShown={props.isShown}>
            {children}
        </Sliding>
    )
}

export default SlideArticle