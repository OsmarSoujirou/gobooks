import React from 'react';
import LivroCard from './LivroCard';
/* Modulo para listar e validar resultado de livros*/

const LivrosLista = (props) => {

    return (
        <div className="card-container">
            {
                
                props.books.map((book, i) => {
                    var thumb = book.volumeInfo.imageLinks;
                    if(typeof thumb != 'undefined'){
                        thumb = book.volumeInfo.imageLinks.thumbnail;
                    }else {
                        thumb = 'https://png.pngtree.com/png-vector/20190217/ourlarge/pngtree-digital-book-icon-design-template-vector-png-image_555235.jpg';
                    }

                    var desc = book.volumeInfo.description;
                    if(typeof desc != 'undefined'){
                        desc = book.volumeInfo.description;
                    }else {
                        desc = 'Sem descrição disponível';
                    }

                    var pubDay = book.volumeInfo.publishedDate
                    if(typeof pubDay != 'undefined'){
                        pubDay = book.volumeInfo.publishedDate.substring(0,4);
                    }else {
                        pubDay = 'Indisponível';
                    }                    
                    /* Validação de Livro já Favorito */
                    if (localStorage.getItem(book.accessInfo.webReaderLink) == null){
                        var favorito = 'card-bt bt-favN'
                    }else {                       
                        var favorito = 'card-bt bt-fav'                        
                    } 
                    return <LivroCard
                                key={i} 
                                image= {thumb}
                                title={book.volumeInfo.title}
                                published={pubDay}
                                description={desc.substring(0, 300)+'...'}
                                link={book.accessInfo.webReaderLink}  
                                favorito={favorito}                                                   
                            />
                })
            }
        </div>
    )
}

export default LivrosLista;