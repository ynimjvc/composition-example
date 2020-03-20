import React from 'react';

import Material from './material';
import Metro from './metro';

export default ({
    design,
    children
}) => {
    switch (design) {
        case 'metro':
            return (<Metro>{children}</Metro>);
        case 'material':
        default:
            return (<Material>{children}</Material>);
    }
}
