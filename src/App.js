import React, {Component} from 'react';
import Livros from './components/Livros';
import './App.css';

/* By Osmar Araujo :) */

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
