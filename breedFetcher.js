const request = require('request');

// const args = process.argv[2];

// request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (_error, response, body) => {
//   const data = JSON.parse(body);
//   if (error === undefined) {
//     console.error('Error', error);
//     return;
//   }
//   if (response.statusCode !== 200) {
//     console.error('Error');
//     return;
//   }
//   if (data.length === 0) {
//     console.log(`Breed not found when searching for "${args}".`);
//     return;
//   } else {
//     console.log(data["0"].description);
//   }
// });

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (data.length === 0) {
      return `Breed not found when searching for "${breedName}"`;
    } else {
      return callback(null, data["0"].description);
    }
  });
};

module.exports = { fetchBreedDescription };