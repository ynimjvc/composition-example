import React, {Children} from 'react';

export default ({
    hasContent,
    children
} = {}) => children && Children.map(children, child => {
    const {props: {placeholder} = {}} = child;

    return hasContent
        ? !placeholder ? child : null
        : placeholder ? child : null;
});
