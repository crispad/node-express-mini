const express = require('express');
//const morgan = require('morgan');
const helmet = require('helmet');

const userRouter = require('./users/userRouter.js');

const server = express();

//custom middleware [m1, m2, mn] -> [request handlers]

function logger(req, res, next) {
    //next points to the next middleware
    console.log(`requesting: ${req.url}`);
    // req.url = `${req.url}/1`; --used to get the first id of the users it wont display an other posts. This will happen first before anything else is executed. 
    //res.send('done')'

    next(); //second step once you write function on top
}

//middleware 
//server.use(morgan('dev'));
server.use(helmet());
server.use(express.json());
server.use(logger);

server.use('/api/users', userRouter);

server.get('/', function(req, res) {
    res.json({ api: 'Running...'});
});



const port = 5000;
server.listen(port, () => console.log('API Running on port 5000'));