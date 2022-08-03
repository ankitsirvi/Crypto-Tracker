const axios = require("axios");

const getAllCoins  = () => {
    const options = {
      method: 'GET',
      url: 'https://coinranking1.p.rapidapi.com/coins',
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '50',
        offset: '0'
      },
      headers: {
        'X-RapidAPI-Key': '678adde55emshf37422c1e9277f0p1063a8jsn99df98f268fb',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data.data.coins);
    }).catch(function (error) {
        console.error(error);
    });
}

const getACoin = (uuid) => {
    const axios = require("axios");

const options = {
  method: 'GET',
  url: `https://coinranking1.p.rapidapi.com/coin/${uuid}`,
  params: {referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: '24h'},
  headers: {
    'X-RapidAPI-Key': '678adde55emshf37422c1e9277f0p1063a8jsn99df98f268fb',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
}

const getCoinPrice = (uuid) => {
    const axios = require("axios");

const options = {
  method: 'GET',
  url: `https://coinranking1.p.rapidapi.com/coin/${uuid}/price`,
  params: {referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: '24h'},
  headers: {
    'X-RapidAPI-Key': '678adde55emshf37422c1e9277f0p1063a8jsn99df98f268fb',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
}

getAllCoins()

// getACoin("omwkOTglq")

