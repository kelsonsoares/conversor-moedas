import React, { Component } from 'react';
import './App.css';

import Conversor from "./components/Conversor"

class App extends Component {
  
      render() {
      return (
        
        <div className="App">
          <h1>Converter Criptomoedas BTC, BRL, USD</h1>
          <div className="linha">
            <Conversor moedaA="BTC" moedaB="BRL"></Conversor>
            <Conversor moedaA="BRL" moedaB="BTC"></Conversor>
          </div>
          <div className="linha">
            <Conversor moedaA="USD" moedaB="BRL"></Conversor>
            <Conversor moedaA="BRL" moedaB="USD"></Conversor>
          </div>
          <div className="linhab"></div>
        </div>

      );
   }
}

export default App;
