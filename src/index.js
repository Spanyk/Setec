const nodemon = require('nodemon');
const app = require('./app');



app.listen(3333, () => console.log("Server started..."));