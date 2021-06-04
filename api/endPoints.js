const login = require('../mocks/login.json');

function endPoint(address, type, testData) {
  this.address = address;
  this.type = type;
  this.testData = testData;
}

module.exports = endPoints = {
  login: new endPoint('/api/user/login', 'POST', login),
};