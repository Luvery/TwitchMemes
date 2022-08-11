/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-quotes */
import React from 'react';
import '../styles/meme.css';
import MyImage from './MyImage';

function Meme(props) {
  const memeData = props;
  const imgurURLBASE = 'https://i.imgur.com/';
  const imageurl = imgurURLBASE + memeData.data + '.jpeg';
  const image = {
    src: imageurl,
    alt: 'logo',
    className: 'picture',
  };
  return (
    <div className='card-body'>
      {/* <img src={imageurl} alt='logo' className='picture' /> */}
      <MyImage image={image} />
    </div>
  );
}

export default Meme;
