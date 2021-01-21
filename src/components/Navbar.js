import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

 const Navbar = () => {
    return (
        <Fragment>
            <div className="main--nav">
                <Link id="logo" src="../images/HealingHubLogo.png" to={"/home"}></Link>
                <Link to={"/auth"}>Sign in</Link>
                <Link to={"/search"}>Search</Link>
                <Link to={"/about"}>About</Link>
            </div>
            
        </Fragment>
    )
}

export default Navbar