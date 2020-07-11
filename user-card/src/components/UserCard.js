import React from 'react';
import './Card.css'

function UserCard(props){
    return(
        <div className='card'>
        <div className='center'>
            <img className='center' src={props.avatar_url}/>
            <h4>{props.name}</h4>
            <p>{props.login}</p>
            <p>{props.url}</p>
            <p>{props.location}</p>
        </div>
        </div>
    );

}

export default UserCard;