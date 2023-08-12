  /**
   * Helper function to add parameters to the query with proper syntax
   * @effect: 1. If called on the first parameter (i.e. length === 1), add WHERE to the query
   *         2. If called on any other parameter, add AND to the query
   */
  const getParamPrefix = function (queryParams) {
    if (queryParams.length === 1) {
      return "WHERE ";
    } else {
      return "AND ";
    }
  };

  module.exports = { getParamPrefix };