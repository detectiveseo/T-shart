import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header_warper'>
            <div className="logo"><h1>LOGO</h1></div>
            <div className='navigation'>
                <Link to="/">Home</Link>
                <Link to="/shop">Products</Link>
                <Link to="/about-us">About us</Link>
                <Link to="/contact-us">Contact us</Link>
            </div>
        </div>
    );
};

export default Header;