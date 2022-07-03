/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-quotes */
import React from 'react';
import '../styles/meme.css';

function Meme(props) {
  const memeData = props;
  const imgurURLBASE = 'https://i.imgur.com/';
  const imageurl = imgurURLBASE + memeData.data + '.jpeg';
  return (
    <div className='card-body'>
      <img src={imageurl} alt='logo' className='picture' />
    </div>
  );
}

export default Meme;
