const express = require('express');
const morgan = require('morgan');
const db = require('./data/db.js');

const server = express();

//middleware 
server.use(morgan('dev'));

server.get('/', function(req, res) {
    res.json({ api: 'Running...'});
});

server.get('/api/users', (req, res) => {
    //get the data
    //send the data
    //send the error if there is one 
    db
        .find()
        .then(users => {
            res.json(users);
        })
        .catch(error => {
            //handle it
            res.status(500).json(error);
        });
});

server.get('/api/users/:id', (req, res) => {
    const { id } = req.params;

    db
        .findById(id)
        .then(users => {
            res.json(users[0]);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

const port = 5000;
server.listen(port, () => console.log('API Running on port 5000'));