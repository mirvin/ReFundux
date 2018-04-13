import React, { Component } from 'react';
import logo from './v1.svg';
import './App.css';
import {createStore} from 'redux';
import {rootReducer} from './Reducers'; //cuz im transpiling  could have done const { createStore } = Redux
//import {increment, decrement} from 'Actions'


let store = createStore(rootReducer);

class App extends Component {

  constructor() {
    super();//App is extended from component base clases
    store.subscribe(() => {// give updates that happens when any events are dispatched
      console.log('subscribing at the store');
      console.log(store.getState());
    });
  }

  increment() {
    console.log('inside store.increment method');
    store.dispatch({type: 'Add-One', data:'added one'});
  }
  
  decrement() {
    console.log('inside store.decrement method');
    store.dispatch({type: 'Sub-One'});
  }
 
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Counter </h1>
        </header>
        <p className="App-intro">
          <code>To get started, edit <code class="redz">src/App.js</code> and save to reload.
          </code>
        </p>
        <div>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
      </div>
    );
  }
}

export default App;
