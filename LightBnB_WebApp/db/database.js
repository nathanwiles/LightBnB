
const { getUserWithEmail } = require('./queries/getUserWithEmail');
const { getUserWithId } = require('./queries/getUserWithId');
const { addUser } = require('./queries/addUser');
const { getAllReservations } = require('./queries/getAllReservations');
const { getAllProperties } = require('./queries/getAllProperties');
const { addProperty } = require('./queries/addProperty');


module.exports = {
  getUserWithEmail,
  getUserWithId,
  addUser,
  getAllReservations,
  getAllProperties,
  addProperty,
};
