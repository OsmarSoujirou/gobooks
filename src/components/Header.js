import React from 'react';
import logo from "../img/logo.png";

const Header = (props) => {
    return (
        <header className="top-page">
            <img className="logo_img" src={logo}/>
            <br/>
            <div className="menu">          
            <span onClick={props.handleFavBooks} ><i> &lt; Favoritos &gt;</i></span>
            </div>
            
        </header>
    )
}

export default Header;