import React from 'react';
import logo from "../img/logo.png";

const Header = (props) => {
    return (
        <header className="top-page">
            <img className="logo_img" src={logo}/>
            <br/>
            <div className="menu"  >          
            <span className={props.StatMenu1} onClick={props.handleBusBooks}><i> BUSCAR </i></span>
            <span className={props.StatMenu2} onClick={props.handleFavBooks}><i> FAVORITOS </i></span>
            </div>
            
        </header>
    )
}

export default Header;