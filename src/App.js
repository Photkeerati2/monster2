import React, { Component } from 'react';

import './App.css';
import {CardList} from './components/card-list/card-list'
import SearchBox from './components/search-box/search-box'

class App extends Component { 

  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField:'',
    }
    
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      return res.json()
    })
    .then(users => {
      console.log(users)
      this.setState({
        monsters: users
      })
    })
    .catch(err => console.log('err', err))
  }

  handleChange = (e) => {
    this.setState({
      searchField: e.target.value
    })
  }

  render() {
    const {searchField, monsters} =  this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
      <h1> Monster Rolodex</h1>
      <SearchBox 
        placeholder='search monsters'  
        hanldeChange={this.handleChange}
        value={searchField}
         />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
