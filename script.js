function getWeather() {
  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=34.0151&longitude=71.5249&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code",
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const tempBlock = document.querySelector(".temprature-block");
      const timeBlock = document.querySelector(".time-block");
      tempBlock.innerText = data.current.temperature_2m +=
        data.current_units.temperature_2m;

      function time() {
        let date = new Date();
        timeBlock.innerText = date.toLocaleTimeString();
      }

      time();
      setInterval(time, 1000)
    })
    .catch((error) => {
      console.log(error);
    });
}

getWeather();
