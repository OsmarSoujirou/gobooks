import React from 'react';
import LivroCard from './LivroCard';
import ImgNo from "../img/Scapa.jpg";

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

                    return <LivroCard
                                key={i} 
                                image= {thumb}
                                title={book.volumeInfo.title}
                                published={pubDay}
                                description={desc.substring(0, 200)+'...'}
                                link={book.volumeInfo.infoLink}                               
                            />
                })
            }
        </div>
    )
}

export default LivrosLista;