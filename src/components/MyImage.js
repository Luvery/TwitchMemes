import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const MyImage = ({ image }) => (
  <div>
    <LazyLoadImage alt={image.alt} src={image.src} className={image.className} effect='opacity' />
  </div>
);
export default MyImage;
