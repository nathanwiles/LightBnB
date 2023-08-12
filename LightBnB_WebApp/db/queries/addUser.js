/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser = function (user) {
  const { query } = require("../index");
  return query(
    `INSERT INTO users (name, email, password) 
      VALUES ($1, $2, $3) RETURNING *;`,
    [user.name, user.email, user.password]
  );
};

module.exports = { addUser };
