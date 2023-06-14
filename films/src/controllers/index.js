const getFilms = require("./getFilms");
const createFilm = require("./createFilm");
const getFilmId = require("./getFilmId");
const { catchedAsync } = require("../utils");

module.exports = {
  getFilms: catchedAsync(getFilms),
  createFilm: catchedAsync(createFilm),
  getFilmId: catchedAsync(getFilmId),
};

