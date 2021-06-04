const Axios = require('axios');
const enviornment = require('./enviornment');

const api = (endPoint, data) => {
  endPoint.data = data;
  switch(endPoint.type) {
    case 'POST':
      return axiosPOST(endPoint);
    default:
      break;
  }
};

const axiosPOST = async ({ address, data, testData }) => {
  console.log('[ADDRESS]', address);
  if (enviornment.mock) if (testData) return await mockApi(testData);
  return await Axios.post(address, data);
}

const mockApi = (data) => {
  return (new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("[MOCK JSON DATA]", data);
      resolve({ data });
      return data;
    }, 500)
  }))
}


module.exports = api, axiosPOST;
