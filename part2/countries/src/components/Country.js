import { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'

const Country = ({country}) => {

    const [weather, setWeather] = useState('')
    const query = country.capital
    const apiKey = process.env.REACT_APP_API_KEY
    
    useEffect(() => {
        axios
          .get(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`)
          .then(response => {
            setWeather(response.data)
          })
    // eslint-disable-next-line
    }, []) 

    const languages = Object.values(country.languages)
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital} <br></br>area {country.area}</p>
            <h2>languages:</h2>
            <ul>
                {languages.map(language => <li key={language}>{language} </li>)}
            </ul>
            <img  src={country.flags.png} alt = 'Flag'/>
            <Weather weather = {weather} query = {query}/>
        </div>
    )
}

export default Country