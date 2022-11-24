const Country = ({country}) => {
    const languages = Object.values(country[0].languages)
    return (
        <div>
            {country.map(country => 
            <p key = {country.name.official}>
                <h1>{country.name.common}</h1>
                <p>capital {country.capital} <br></br>area {country.area}</p>
                <h2>languages:</h2>
                <ul>
                    {languages
                        .map(language => 
                        <li>{language} </li>)}
                </ul>
                <img  src={country.flags.png} alt=''/>
            </p>
            )}

        </div>
    )
}

export default Country