import React, { Component } from 'react';
import StockList from './StockList';
import UserList from './UserList';
import Hoc from './Hoc';

const stocksData = [
  {
    id: 1,
    name: 'TCS'
        
  },
  {
      id: 2,
      name: 'Infosys'
  },
  {
      id: 3,
      name: 'Reliance'
  }
]

const usersData = [
  {
    id: 1,
    name: 'Krunal'
      
  },
  {
      id: 2,
      name: 'Ankit'
  },
  {
      id: 3,
      name: 'Rushabh'
  }
]

let Stocks = Hoc(StockList,stocksData)
let Users = Hoc(UserList,usersData)

class App extends Component {
  
  render() {
    return (
      <div>
        <Stocks/>
        <Users/>
      </div>
    )
  }
}

export default App;