import React from 'react';
import LivroCard from './LivroCard';

function getFavBooks(){
    var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

    while ( i-- ) {
        values.push( JSON.parse(localStorage.getItem(keys[i])) );
    }
    return values;
}

const LivrosFavLista = () => {
    var favBooks = getFavBooks();
    return (
        <div className="card-container">
            {
                favBooks.map((book, i) => {
                    return <LivroCard
                                key={i} 
                                image= {book.image}
                                title={book.title}
                                published={book.published}
                                description={book.description}
                                link={book.link}                          
                            />
                })
            }
        </div>
    )
}

export default LivrosFavLista;