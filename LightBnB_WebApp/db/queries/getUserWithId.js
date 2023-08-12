/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function (id) {
  const { query } = require("../index");
  return query(
    `SELECT * 
      FROM users 
      WHERE id = $1;`,
    [id]
  )
    .then((res) => {
      return res.rows[0] || null;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { getUserWithId };
