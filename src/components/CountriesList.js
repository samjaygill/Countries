import Countries from "./Countries"
import './CountriesList.css'


const CountriesList = ({country, onCountryClicked}) => {

    if (!Array.isArray(country)) {
        return <div>No countries to display</div>;
      }

    const countryItems = country.map((country, index) => {
        return <Countries country={country} key={index} onCountryClicked={onCountryClicked}/>
    })


    return(
        <div className="country-list">
      <h3 className="country-header">Countries:</h3>
      <hr className="hr-style"/>
      {countryItems}
    </div>
    )
}

export default CountriesList;