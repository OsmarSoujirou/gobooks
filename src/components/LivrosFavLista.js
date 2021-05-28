import React from 'react';
import LivroCard from './LivroCard';

/* Push de Livros Favoritos armazenados no localStorage */
function getFavBooks(){
    var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;
    while ( i-- ) { values.push( JSON.parse(localStorage.getItem(keys[i])) ); }
    return values;
}

const LivrosFavLista = () => {
    var favBooks = getFavBooks();
    var Msg2 = false
    if(favBooks.length == 0){ Msg2 = true }
    return (
        <div className="card-container">
            {              
                favBooks.map((book, i) => {

                    if (localStorage.getItem(book.link) == null){
                        var favorito = 'card-bt bt-favN'
                    }else {                       
                        var favorito = 'card-bt bt-fav'                        
                    }                   

                    return <LivroCard
                                key={i} 
                                image= {book.image}
                                title={book.title}
                                published={book.published}
                                description={book.description}
                                link={book.link}
                                favorito={favorito} 
                            />
                })
            }
            {Msg2 === true ? <div className="MsgBox">Os seus livros favoritos vão aparecer aqui.</div>: null}
        </div>
    )
}

export default LivrosFavLista;