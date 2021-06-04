const Axios = require('axios');
const enviornment = require('./enviornment');

const api = (endPoint, data) => {
  endPoint.data = data;
  switch(endPoint.type) {
    case 'POST':
      return axiosPOST(endPoint);
    case 'GET':
      return axiosGET(endPoint);
    default:
      break;
  }
};

const axiosPOST = async ({ address: route, data, testData }) => {
  console.log('[ADDRESS] POST', route);
  if (enviornment.mock) if (testData) return await mockApi(testData);
  return await Axios.post(
    route, data
  );
}

const axiosGET = async ( { address: route, data, testData }) => {
  console.log('[ADDRESS] GET', route);
  if (enviornment.mock) if (testData) return await mockApi(testData);
  return await Axios.get(
      route + (data ? data : ""),
    );
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
