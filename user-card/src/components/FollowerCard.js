import React, { useState } from 'react';
import axios from 'axios';
import './Card.css';

function FollowerCard(props) {
  const [follower, setFollower] = useState([]);

  const handleFollower = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/priyanka10it/followers`)
      .then(res => {
        setFollower(res.data);
        console.log('Followers ', follower);
      })

      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div>
      <button onClick={handleFollower}>
        Followers
      </button>
      {console.log('followers return', follower)}
      {follower.map(item => (
        <div  className='card'>
        <div className='center'>
            <img  className='center' src={item.avatar_url}  />
            <p>{item.login}</p>
            <p>{<a href="#">{item.url}</a>}</p>
            
          </div>
        </div>
      ))}
    </div>
  );
}

export default FollowerCard; 