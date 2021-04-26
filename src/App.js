import React, { Component } from 'react';
import CardList from './components/card-list/CardList.component.jsx';
import SearchBox from './components/search-box/SearchBox.component.jsx';
import './App.css';

class App extends Component {
  state = {
    monsters: [],
    searchField: '',
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return this.setState({ monsters: data });
      });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className='App'>
        <h1> Monsters Rolodex </h1>
        <SearchBox placeholder={'Search Monsters'} searchField={searchField} handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
