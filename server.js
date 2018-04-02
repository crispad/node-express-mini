const express = require('express');

const server = express();

server.get('/', function(req, res) {
    res.json({ api: 'Running...'});
});

const port = 5000;
server.listen(port, () => console.log('API Running on port 5000'));