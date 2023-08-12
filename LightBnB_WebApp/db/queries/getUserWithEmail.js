/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function (email) {
  const { query } = require("../index");
  return query(
    `SELECT * 
      FROM users 
      WHERE email = $1;`,
    [email]
  )
    .then((res) => {
      return res.rows[0] || null;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { getUserWithEmail };
