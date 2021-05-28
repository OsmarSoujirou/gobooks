import React, { useState } from 'react';

const FavObj = ({favorito}) => {   
const [fav, setFavorito] = useState(favorito)    
const AlterarFav = () => {
        /* Função para alternar o stylo do favorito */
       if (fav == 'card-bt bt-favN'){
            setFavorito('card-bt bt-fav');   
        }else {
            setFavorito('card-bt bt-favN'); 
        }}

         return ( 
             
             <div className={fav} onClick={AlterarFav}>
                <a>FAVORITO</a>
             </div>     
        );

};


export default FavObj;