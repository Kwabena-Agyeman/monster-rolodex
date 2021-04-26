import React from 'react';
import './card.styles.css';

const Card = (props) => {
  return (
    <div className='card-container'>
      <img src={`https://robohash.org/${props.monster.id * 8}?set=set2&size=150x150`} alt='profile' />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};

export default Card;
