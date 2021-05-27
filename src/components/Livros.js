import React, {Component} from 'react';
import request from 'axios';
import Header from './Header';
import PesquisaDiv from './PesquisaDiv';
import LivrosLista from './LivrosLista.js';
import LivrosFavLista from './LivrosFavLista';
import Paginas from './Paginas';


class Livros extends Component {

    /* Pesquisa, Axios para HttpRequests */
    searchBook = (e) => {
        e.preventDefault();
        
        const url = "https://www.googleapis.com/books/v1/volumes?q="
        request.get(url + this.state.searchField.replaceAll(' ', '+') + '&key=AIzaSyAR68qUv-yD9CPeYgTDS5MhxZfxi1kbXLQ&maxResults=40')
          .then(data => {
              this.setState({ books: [data.data.items][0]})
              console.log(this.data)
          })
        this.setState({ displayBookList: true})
        /* Caso seja feita uma nova pesquisa durante a tela de favoritos */
        this.setState({ displayBookFavList: false})
    }


    render(){
        
        return (
            <div>                
                <Header handleFavBooks={this.handleFavBooks}/>
                <PesquisaDiv searchBook={this.searchBook} handleSearch={this.handleSearch} handleFavBooks={this.handleFavBooks}/>
            </div>
        )
    }
}


export default Livros;
