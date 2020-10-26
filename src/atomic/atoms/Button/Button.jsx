import React from 'react';

export const Button = ({ backgroundColor, label, ...props}) => {
    return (
        <button style={backgroundColor && {backgroundColor}} {...props}>
            {label}
        </button>
    )
}