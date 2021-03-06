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
            displayPesquisa: true,
            displayResultado: true,
            displayPaginas: false,
            StatMenu1:'disabled',
            StatMenu2:'',
            Msg:'',
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
            if(data.data.totalItems !== 0){
                this.setState({ books: [data.data.items][0]})
                this.setState({ displayBookList: true})
                /* Caso seja feita uma nova pesquisa durante a tela de favoritos */
                 this.setState({ displayBookFavList: false})
                 this.setState({ Msg: 'Aproximadamente ' + Number(data.data.totalItems).toLocaleString('pt-BR') + ' resultados.'})
                 this.setState({ displayPaginas: true})
                }else{
                /* Pesquisa sem resultados */
                this.setState({ displayBookList: false})                
                this.setState({ displayBookFavList: false})
                this.setState({ displayPaginas: false})
                this.setState({ Msg: 'Ops.... não encontrei nada.'})
            }
            
        })

        this.setState({ displayResultado: true})         
       
    }
 /*Retorno Pesquisa*/
    handleSearch = (e) => {
        this.setState({ searchField: e.target.value})        
    }
 /*Exibir Favoritos*/
    handleFavBooks = () => {

        this.setState({ displayBookFavList: true});
        this.setState({ displayBookList: false});
        this.setState({ displayPesquisa: false});
        this.setState({ displayResultado: false});
        this.setState({ displayPaginas: false})
        this.setState({ StatMenu1: ''});
        this.setState({ StatMenu2: 'disabled'});
    }

 /*Exibir Busca de Livros*/
    handleBusBooks = () => {

        this.setState({ displayBookFavList: false});
        this.setState({ displayBookList: true});
        this.setState({ displayPesquisa: true});
        this.setState({ displayResultado: true});
        this.setState({ displayPaginas: true})
        this.setState({ StatMenu1: 'disabled'});
        this.setState({ StatMenu2: ''});    

    }

    handleRef = () =>{
        this.setState({ displayBookFavList: !this.state.displayBookFavList});
        this.setState({ displayBookList: !this.state.displayBookList});     
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
                <div className='line-style'></div>                
                <Header handleFavBooks={this.handleFavBooks} handleBusBooks={this.handleBusBooks} StatMenu1={this.state.StatMenu1} StatMenu2={this.state.StatMenu2} />                
                {this.state.displayPesquisa === true ? <PesquisaDiv searchBook={this.searchBook} handleSearch={this.handleSearch} handleFavBooks={this.handleFavBooks}/> : null}
                {this.state.displayResultado === true ? <div className="MsgBox">{this.state.Msg}</div>: null}
                {this.state.displayBookFavList === true ? <LivrosFavLista handleRef={this.handleRef} displayBookFavList={this.state.displayBookFavList}/> : null}
                {this.state.displayBookList === true ? <LivrosLista  handleRef={this.handleRef}  books={this.state.items} displayBookList={this.state.displayBookList} /> : null}
                {this.state.displayPaginas === true ? <Paginas  items={this.state.books} onChangePage={this.onChangePage} pagerInfo={this.state.pagerInfo} pageOfItems={this.state.pageOfItems} className="pagination"/> : null}
            </div>
        )
    }
}


export default Livros;
