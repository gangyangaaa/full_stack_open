import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

function App() {
  const [countries, setCountries] = useState([])
  const [selectedCountries, setSelectedCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleSearch = (event) => {
    setFilter(event.target.value)
    setSelectedCountries(countries
      .filter((country) => 
      country.name.common.toLowerCase().includes(event.target.value.toLowerCase())))
  }

  return (
    <div>
      <Filter filter = {filter} handleSearch = {handleSearch} />
      <Countries countries = {selectedCountries} />
    </div>
  )
}

export default App;
