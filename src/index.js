const app = require('./app');
const loader = requirer('./loaders');

loader.start();

app.listen(3333, () => console.log("Server started..."));