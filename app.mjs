window.getWeather = function () {

    let cityName = document.querySelector("#cityName").value;
    let currentTime = moment().format('MMMM Do hh:mm A');
    
   
    
    
    let apiKey = `d6b11e5a2cafe8b61045ab0d8c7d767d`
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
    .then(function (response) {
      // handle success
      console.log(response.data)
      let cityName = response.data.name;
      let currentTime = moment().format('MMMM Do hh:mm A');
      let icon = response.data.weather[0].icon;
      let weatherDescription = response.data.weather[0].description;
      let currentTemperature = `${Math.round(response.data.main.temp)}°`
      
      



      document.querySelector(".city").innerHTML = cityName;
      document.querySelector(".time").innerHTML = currentTime;
      document.querySelector("#icon1").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      document.querySelector("#condition").innerHTML = weatherDescription
      document.querySelector(".curtemp").innerHTML = currentTemperature;
      
      
     
    })
    .catch(function (error) {
      // handle error
      console.log(error.data);
    })

}