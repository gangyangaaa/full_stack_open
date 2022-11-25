const Weather = ({weather, query}) => {
    if (weather.length === 0) {return}
    return (
        <div>
            <h2>Weather in {query}</h2>
            <ul>temperature {(weather.main.temp - 273.15).toFixed(2)} Celcius</ul>
            <img 
                alt = {"Temp_Imag"}
                src = {`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            ></img>
            <ul>wind {weather.wind.speed} m/s</ul>
        </div>
    )
}

export default Weather