const {getParamPrefix} = require('./query-helpers/getParamPrefix'); 
/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const getAllProperties = function (options, limit = 10) {
  const { query } = require('../index');
  const queryParams = [];

  let queryString = `
  SELECT properties.*, avg(property_reviews.rating) as average_rating
  FROM properties
  JOIN property_reviews ON properties.id = property_id
  `;

  if (options.city) {
    queryParams.push(`%${options.city}%`);
    queryString += getParamPrefix(queryParams);
    queryString += `city LIKE $${queryParams.length} `;
  }
  if (options.owner_id) {
    queryParams.push(options.owner_id);
    queryString += getParamPrefix(queryParams);
    queryString += `owner_id = $${queryParams.length} `;
  }
  if (options.minimum_price_per_night) {
    queryParams.push(options.minimum_price_per_night * 100);
    queryString += getParamPrefix(queryParams);
    queryString += `cost_per_night >= $${queryParams.length} `;
  }
  if (options.maximum_price_per_night) {
    queryParams.push(options.maximum_price_per_night * 100);
    queryString += getParamPrefix(queryParams);
    queryString += `cost_per_night <= $${queryParams.length} `;
  }

  queryParams.push(options.minimum_rating || 0);
  queryParams.push(limit);
  queryString += `
  GROUP BY properties.id
  HAVING avg(property_reviews.rating) >= $${queryParams.length - 1}
  ORDER BY cost_per_night
  LIMIT $${queryParams.length};
  `;
  return query(queryString, queryParams)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {getAllProperties};