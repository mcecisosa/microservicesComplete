const getPlanets = require("./getPlanets");
const createPlanet = require("./createPlanet");
const getPlanetId = require("./getPlanetId");
const { catchedAsync } = require("../utils");

module.exports = {
  getPlanets: catchedAsync(getPlanets),
  createPlanet: catchedAsync(createPlanet),
  getPlanetId: catchedAsync(getPlanetId),
};
