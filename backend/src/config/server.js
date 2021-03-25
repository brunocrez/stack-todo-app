const PORT = 3003;

const express = require('express');

const server = express();
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.listen(PORT, () => {
  console.log(`backend listening on port ${PORT}`);
});

module.exports = server;

