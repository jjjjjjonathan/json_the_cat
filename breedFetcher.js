const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (_error, _response, body) => {
    const data = JSON.parse(body);
    if (data.length === 0) {
      return callback(`Breed not found when searching for "${breedName}"`, null);
    } else {
      return callback(null, data["0"].description);
    }
  });
};

module.exports = { fetchBreedDescription };