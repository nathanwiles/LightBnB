/**
 * @param {array} queryParams An array of all the current query parameters
 *
 * Helper function to add parameters to the query with proper syntax
 *
 * @effect : 1. If called on the first parameter (i.e. length === 1), add WHERE to the query
 *         2. If called on any other parameter, add AND to the query
 *
 * @usage : call after adding a parameter to queryParams and before adding the parameter to the queryString.
 */
const getParamPrefix = function (queryParams) {
  if (queryParams.length === 1) {
    return "WHERE ";
  } else {
    return "AND ";
  }
};

module.exports = { getParamPrefix };
