function getWeather (){

    fetch("https://api.open-meteo.com/v1/forecast?latitude=34.0151&longitude=71.5249&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code")
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        let tempBlock = document.querySelector(".temprature-block");

        tempBlock.innerText = data.current.temperature_2m += data.current_units.temperature_2m

    })
    .catch((error)=>{
        console.log(error)
    })

}

getWeather();