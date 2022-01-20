const request = require('request');
const args = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {
  const data = JSON.parse(body)
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log(data["0"].description);
});