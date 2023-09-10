const fs = require('fs');

// Load image
const spongegar = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

// Handle responses
const getSponge = (response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(spongegar);
  response.end();
};

module.exports = {
  getSponge,
};
