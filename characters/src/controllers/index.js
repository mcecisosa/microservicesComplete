const getCharacters = require("./getCharacters");
const createCharacter = require("./createCharacter");
const getCharacterId = require("./getCharacterId");
const { catchedAsync } = require("../utils");

module.exports = {
  getCharacters: catchedAsync(getCharacters),
  createCharacter: catchedAsync(createCharacter),
  getCharacterId: catchedAsync(getCharacterId),
};

