import React from 'react';
import { Redirect } from 'react-router-dom';

export const redirectTo = path => {
    console.log('path = ', path)
    return (
        <Redirect to={path} />
    );
}