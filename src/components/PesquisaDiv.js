import React from 'react';

const PesquisaDiv = (props) => {
    return (        
        <div className="search-area">
            <form onSubmit={props.searchBook} action="" className="search">
                <input placeholder="O que você procura..." onChange={props.handleSearch} type="text" className="search-bar searchTerm"/>
                <button type="submit" className="search-btn searchButton">&gt;</button>                
            </form>
        </div>
    )
}

export default PesquisaDiv;