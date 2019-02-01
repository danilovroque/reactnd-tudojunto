import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User.js';

class ListUsers extends Component {
  state = {
    showGames: true
  }

  toggleGamesPlayed = () => {
    this.setState((current) => ({
      showGames: !current.showGames
    }));
  }
  
  render() {
    const { showGames } = this.state;
    const { users } = this.props;

    const gamesButton = (
      <button className='smallButton' onClick={this.toggleGamesPlayed}>
        { showGames ? 'Hide ' : 'Show ' }
        the numbers of games played
       </button>
    )

    return (
      <div>
        <div>
          <h2>USERS</h2>
          {users && users.length > 0 ? gamesButton : ''}
        </div>
        <ol>
          {users.map((user) => (
            <User key={user.username} user={user} onAddGame={this.props.onAddGame}  showGames={this.state.showGames} />
          ))}
        </ol>
      </div>
    )
  }
}

ListUsers.propTypes = {
  onAddGame: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

export default ListUsers;