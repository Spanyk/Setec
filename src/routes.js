const express = require('express');

const routes = express();

routes.get('/health', (req, res) => {
    return res.status(200).json ({ massage: 'Server is on...' });
})

module.exports = routes;