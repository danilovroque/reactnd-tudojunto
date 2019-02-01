import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => {
  const user = props.user;
  return (
    <li className="user">
      <p>Username: {user.username}</p>
      {props.showGames && (
          <div class='showing-games'>
            <p>Number of games: {user.games}</p>  
            <button className='smallButton' onClick={() => props.onAddGame(user.username)}>Add game</button>
          </div>
        )}
    </li>
  )
}

User.propTypes = {
  onAddGame: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  showGames: PropTypes.bool.isRequired
};

export default User;