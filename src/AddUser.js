import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Danilo

class AddUser extends Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
      username: '',
      games: 0
    },
    userExists: false
  };

  propTypes = {
    onAddUser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
  };

  userExists = (currentUsername) => {
    const users = this.props.users;
    for (let user of users) {
      if (user.username === currentUsername) {
        return true;
      }
    }
    return false;
  };

  handleInputChange = (name, value) => {
    
    this.setState((current) => ({
      ...current,
      user: {
        ...current.user, 
        [name]: value
      }
    }));
  };

  addUser = (event) => {
    event.preventDefault();
    const userExists = this.userExists(this.state.user.username);
    
    if (!userExists) {
      this.props.onAddUser(this.state.user);
    }
    
    this.handleInputChange('firstName', '');
    this.handleInputChange('lastName', '');
    this.handleInputChange('username', '');
    
    this.setState(() => ({
      userExists
    }));
  };

  isDisabled = () => {
    const { firstName, lastName, username } = this.state.user;
    
    return firstName === '' || lastName === '' || username === '';
  }
  
  render () {
    const { firstName, lastName, username } = this.state.user;
    
    return (
      <div>
          <form onSubmit={this.addUser}>
            <input
              type='text'
              name='firstName'
              placeholder='First name' 
              value={firstName} 
              onChange={(event) => this.handleInputChange(event.target.name, event.target.value)} />
            <input
              type='text'
              name='lastName'
              placeholder='Last name' 
              value={lastName} 
              onChange={(event) => this.handleInputChange(event.target.name, event.target.value)} />
            <input
              type='text'
              name='username'
              placeholder='Username' 
              value={username} 
              onChange={(event) => this.handleInputChange(event.target.name, event.target.value)} />
            <button className='add-button' disabled={this.isDisabled()}>Add</button>
          </form>
          {
            this.state.userExists 
             ? <p className='error'>You cannot add a user that already exists</p>
             : ''
          }
        </div>
    )
  }
}

export default AddUser;