import React from 'react';

const Header = (props) => {
    return (
        <header className="top-page">
            <h1><i className="fas fa-book"></i> GO&gt;BOOKS</h1>
            <br/>
            <span onClick={props.handleFavBooks} className="fav-btn"><i className="fas fa-star">Favoritos</i></span>
            
        </header>
    )
}

export default Header;