var axios = require("axios").default;
var options = {
  method: "GET",
  url:
    "https://lego-set-prices-achieved-in-the-market-like-bricklink.p.rapidapi.com/",
  headers: {
    "x-rapidapi-key": "bf3c0cd05dmshca02c4356f6cd7dp11a393jsnc30e15927811",
    "x-rapidapi-host":
      "lego-set-prices-achieved-in-the-market-like-bricklink.p.rapidapi.com",
  },
};
const genericRequest = async (options) => {
  try {
    const instance = axios.create({});
    let info = await instance.request(options);
    return info;
  } catch (e) {
    console.log(e, "this is error");
  }
};
const api = {
  getProducts: async () => {
    const data = await genericRequest(options);
    console.log(data);
    return data;
  },
};

module.exports.api = api;
