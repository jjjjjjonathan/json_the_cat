const request = require('request');
const args = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {
  const data = JSON.parse(body);
  if (error === undefined) {
    console.error('Error', error);
    return;
  }
  if (response.statusCode !== 200) {
    console.error('Error');
    return;
  }
  if (data.length === 0) {
    console.log(`Breed not found when searching for "${args}".`);
    return;
  } else {
    console.log(data["0"].description);
  }
});