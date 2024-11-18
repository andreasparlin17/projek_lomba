import React from 'react';

const CodeLabel = ({ children, color, className}) => {
    let backgroundColor;

    if (color === 'red') {
        backgroundColor = '#FF0000';
    } else if (color === 'purple') {
        backgroundColor = '#2E1B80';
    } else if (color === 'blue') {
        backgroundColor = 'rgba(44, 108, 165, 0.59)';
    }

    return (
        <span className={`lg:text-base text-xm rounded-md p-2 font-bold ${className}`} style={{ backgroundColor }} >
            {children}
        </span>
    );
};

export default CodeLabel;
