const endPoints =  require('./endPoints');
const api = require('./api');

const apis = {
  login: (data) => api(endPoints.login, data)
};

// testing
const res = async () => {
  const response =  await apis.login({
    email: 'abc@gmail.com',
    password: '12345678',
  });
  console.log('[RESPONSE]',response);
}

res();

