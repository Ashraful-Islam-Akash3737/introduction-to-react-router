// import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>


            <nav>
                <h3>Navbar</h3>

                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
            </nav>

        </div>
    );
};

export default Header;