import fetch from 'isomorphic-fetch';

const fetchListing = (url) => {
  return fetch(url).then(res => {
    return res.json()
  }).then(res => {
    return res;
  })
};

export default fetchListing;
