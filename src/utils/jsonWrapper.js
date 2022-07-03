/* eslint-disable linebreak-style */
import axios from 'axios';

const MEMES_URL = '../onlylinks.txt';

export const getMemes = async () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  axios
    .get(MEMES_URL)
    .then((response) => response.data.split('\n'))
    .catch((err) => {
      console.log(err);
      return null;
    });
