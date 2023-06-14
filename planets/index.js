const server = require("./src/server");

const PORT = 8002;

server.listen(PORT, () => {
  console.log(`Planets service listening on port ${PORT}`);
});
