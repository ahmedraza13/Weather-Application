window.getWeather = function () {

    let cityName = document.querySelector("#cityName").value;
    let currentTime = moment().format('MMMM Do hh:mm A');
    document.querySelector("#showtime").innerHTML = `${currentTime}`
    
    
    let apiKey = `d6b11e5a2cafe8b61045ab0d8c7d767d`
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
    .then(function (response) {
      // handle success
      console.log(response.data);
      document.querySelector("#showcity").innerHTML = `${response.data.name}`
    })
    .catch(function (error) {
      // handle error
      console.log(error.data);
    })

}