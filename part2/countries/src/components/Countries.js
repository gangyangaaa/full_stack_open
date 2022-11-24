import Country from './Country'

const Countries = ({countries}) => {
  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>
  } else if (countries.length === 1) {
    return <Country country = {countries}/>
  }
  return (
    <ul>
      {countries
      .map(country => 
      <li key = {country.name.official}>{country.name.common} </li>)}
    </ul>
  )
}

export default Countries