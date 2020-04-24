require('dotenv').config();
const express = require('express');

const server = require('./api/server.js');

const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log('Server online...');
})
