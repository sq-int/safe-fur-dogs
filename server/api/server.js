const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

/* middleware */
server.use(express.json());
server.use(cors());
server.use(helmet());

/* endpoints */

// test //
server.get('/', (req, res) => {
    res.status(200).json({ api: 'online' });
});

module.exports = server;