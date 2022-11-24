const Country = ({country}) => {
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
        </div>
    )
}

export default Country