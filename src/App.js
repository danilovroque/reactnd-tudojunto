import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './AddUser.js';
import ListUsers from './ListUsers.js';

//Danilo

class App extends Component {
  state = {
    users: []
  };

  addUser = (user) => {
    this.setState((current) => ({
      users: [...current.users, user]
    }));
  };

  addGame = (username) => {   
    this.setState((current) => {
      const users = current.users.map((item) => {
        if (item.username === username) {
          item.games = item.games + 1;
        }
        return item;
      });
      return { users };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>GAMES WEBSITE</h2>
        <AddUser onAddUser={this.addUser} users={this.state.users} />
        <ListUsers users={this.state.users} onAddGame={this.addGame} />        
      </div>
    );
  }
}

export default App;
