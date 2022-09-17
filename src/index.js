const app = require("./app");
const Loader = requirer("./loaders");

Loader.start();

app.listen(3333, () => {
  console.log("Server started...");
});
