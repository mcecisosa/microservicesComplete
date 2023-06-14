const axios = require("axios");

module.exports = {
  list: async () => {
    const results = await axios.get("http://database:8004/Film");
    return results.data;
  },
  listId: async (id) => {
    const results = await axios.get(`http://database:8004/Film/${id}`);
    return results.data;
  },
  create: async () => {
    throw Error("An error occurred while creating the film");
  },
};
