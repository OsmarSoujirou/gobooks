import React, {Component} from 'react';
import request from 'axios';
import Header from './Header';
import PesquisaDiv from './PesquisaDiv';
import LivrosLista from './LivrosLista.js';
import LivrosFavLista from './LivrosFavLista';
import Paginas from './Paginas';


class Livros extends Component {

    constructor(props){
        super(props);

        /* Definição de valores padrões */
        this.state = {
            books: [],
            searchField: '',
            displayBookList: true,
            displayBookFavList: false,
            pageOfItems: [],
            items: [],
            pagerInfo : [],
            currentPage: 1
        }        
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems, currentPage) {

        this.setState({ pageOfItems: pageOfItems });
        this.setState({ currentPage: currentPage });
        
    }
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

    handleSearch = (e) => {
        this.setState({ searchField: e.target.value})        
    }

    handleFavBooks = () => {
        this.setState({ displayBookFavList: true})
        this.setState({ displayBookList: false})
    }


    render(){
        if( this.state.books.length !== 0){

            let renderBooks = {}
            switch(this.state.currentPage){
                case 1:
                    renderBooks = {startIndex: 0, endIndex: 8}
                    break;
                case 2:
                    renderBooks = {startIndex: 9, endIndex: 17}
                    break;
                case 3:
                    renderBooks = {startIndex: 18, endIndex: 26}
                    break;
                case 4:
                    renderBooks = {startIndex: 27, endIndex: 35}
                    break;
                case 5:
                    renderBooks = {startIndex: 36, endIndex: 39}
                    break;
                default:
                    renderBooks = {startIndex: 0, endIndex: 8}
                    break;
            }
            this.state.items = [];
            for(let i = renderBooks.startIndex; i <= renderBooks.endIndex; i++){
                this.state.items.push(this.state.books[i])
            }

        }
        return (
            <div>                
                <Header handleFavBooks={this.handleFavBooks}/>                
                {this.state.displayBookList === true ? <PesquisaDiv searchBook={this.searchBook} handleSearch={this.handleSearch} handleFavBooks={this.handleFavBooks}/> : null}
                {this.state.displayBookFavList === true ? <LivrosFavLista displayBookFavList={this.state.displayBookFavList}/> : null}
                {this.state.displayBookList === true ? <LivrosLista books={this.state.items} displayBookList={this.state.displayBookList} /> : null}
            
            </div>
        )
    }
}


export default Livros;
