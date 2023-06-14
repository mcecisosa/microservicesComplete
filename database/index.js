const server = require("./src/server");

const { Character } = require("./src/database");

server.listen(8004, () => {
  console.log("Database service on port 8004");
});
