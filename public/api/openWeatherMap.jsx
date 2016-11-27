var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=cebc68a9a277f01156da13f23b455d85&units=metric';

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestUrl).then(function(response){
      if(response.data.cod && response.data.message){
          throw new Error(response.data.message);
      }else{
        return response.data.main.temp;
      }
    }, function(response){
      throw new Error(response.data.message);
    });
  }
}
