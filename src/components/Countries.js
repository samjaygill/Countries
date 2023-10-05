import './Countries.css'

import React, { useState } from 'react'

const Countries = ({ country }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails)
    }

    if (!country || !country.name || !country.capital) {
        return <div className="country-detail">Country data not available</div>;
    }



    return (
        <div className="country-detail">
            <button className='button' onClick={toggleDetails}>
                {showDetails}
                <span className="arrow-icon">&#10036;</span>
            </button>

            {country.name.common} {country.flag}
            {showDetails && (
                <div className='expand'>
                    <p className='details'>Capital: {country.capital}</p>
                    <p className='details'>Region: {country.region}</p>
                    <p className='details'>Population: {country.population}</p>
                    <p className='details'>Timezone: {country.timezones}</p>
                    <p className='details'>Currency:</p>
                    {Object.entries(country.currencies).map(([code, currency]) => (
                        <li className='currencies' key={code}>
                            {currency.name} ({code})
                        </li>
                    ))}
                    <p className='details'>languages:</p>
                    {Object.entries(country.languages).map(([code, name]) => (
                        <li className='languages' key={code}>
                            {name} ({code})
                        </li>
                    ))}
                </div>
            )}

        </div>
    )
}


export default Countries;
