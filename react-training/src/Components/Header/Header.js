import React from 'react';
import './Header.css';

const header = () => {
    return(
        <div className='Header-container'>
            <img src='https://png.pngtree.com/templates/20180917/simple-success-education-logo-png_32069.jpg'
            className='Head-Image'
            alt = 'Header-Image'/>
            <h1 className='header-text'>Library Management System</h1>
        </div>
    );
};

export default header;