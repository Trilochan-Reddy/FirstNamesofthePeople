const peopleNames = require("../country/state/city/index");
const getFirstNames = requite("../utilities/utils/index");

const getPeopleInCity = (peopleNames) => {
  return getFirstNames(peopleNames);
};

module.exports = getPeopleInCity;
