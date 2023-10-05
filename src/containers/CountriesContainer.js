import React, { useState, useEffect } from 'react'
import CountriesList from '../components/CountriesList'
import Countries from '../components/Countries'
import './CountriesContainer.css'

const CountriesContainer = () => {

    const [countries, setCountries] = useState("")
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        getCountries();
    }, [])

    const getCountries = function () {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                const sortedCountries = data.sort((a, b) => {
                    const nameA = a.name.common.toLowerCase()
                    const nameB = b.name.common.toLowerCase()
                    return nameA.localeCompare(nameB)
                })
                setCountries(sortedCountries)
            })
    }

    const onCountrySelected = (country) => {
        setSelectedCountry(country)
    }


    return (
        <>
            <CountriesList className='main-container' country={countries} onCountrySelected={onCountrySelected} />
            {selectedCountry ? <Countries country={selectedCountry} /> : null}
        </>
    )
}


export default CountriesContainer;