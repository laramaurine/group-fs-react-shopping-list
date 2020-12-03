import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ShoppingList from '../ShoppingList/ShoppingList'

import Header from '../Header/Header'
import AddList from '../AddItem/AddItem'
class App extends Component {
  state = {
    groceryList: [],
  }

  componentDidMount(){
    console.log('Component did mount');
    this.getAllGroceries();
    
  }

  //start AllGroceries
  getAllGroceries = () => {
    axios({
      method: 'GET', 
      url: '/list'
    })
    .then((response) => {
      //the info we want is in the response
      console.log('response', response.data);
      this.setState({
        groceryList: response.data
      })
      
    })
    .catch((error) => {
      alert('Something bad happening in GET');
      console.log('error', error);  
    })
  }

  
  render() {
    return (
      <div className="App">
        <Header/>
        <main>
          <AddList/>
          <p>Under Construction...</p>
          <ShoppingList />
        </main>
      </div>
    );
  }
}

export default App;
