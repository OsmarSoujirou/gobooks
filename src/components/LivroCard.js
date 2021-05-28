import React from 'react';
import FavObj from './FavObj';

/* Função para armazenar/remover as informações de favoritos.*/
function addFavBook(image, title, date, desc, link, favorito){
        var bookInfos = {image: image, title: title, published: date, description: desc, link: link}
        if (favorito == 'card-bt bt-favN'){
            localStorage.setItem(link, JSON.stringify(bookInfos));            
        }else {
            localStorage.removeItem(link);                  
        }        
}

const LivroCard = (props) => {  
 
    return (        
        <div className="card">
            <div className="card-cover">
               <img src={props.image} alt="" className="card-img"/>
            </div>
            <div className="card-description">
                <h2 className="card-title">{props.title}</h2>
                <h3 className="card-text">Publicado em {props.published}</h3>
                <p className="card-text card-desc">{props.description}</p> 
                <div className="card-favorite">
                <a href={props.link} target="_blank" rel="noreferrer">
                <div className="card-bt bt-acess">
                 LER MAIS               
                </div>
                </a>                
                <span onClick={() => addFavBook(props.image, props.title, props.published, props.description, props.link, props.favorito)}>
                <FavObj  favorito={props.favorito} />
                </span>
                </div>                  
            </div>
                    
        </div>
       
    )
}

export default LivroCard;