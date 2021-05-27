import React, {Component} from 'react';
import Header from './components/Header';
import Livros from './components/Livros';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Livros />
      </div>
    )
  }
}


export default App;
