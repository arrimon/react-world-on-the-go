import React, { use, useState } from 'react';
import Country from '../Country/Country';

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries)

    // count visited Countries
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) => {
        // setVisitedCountries()
        // console.log('Click Visited Countries = ', country.name.common)
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    return (
        <div >
            <h3>List of countries Quantity: {countries.length}</h3>
            <h3>Visited countries: {visitedCountries.length}</h3>
            <ol>
                {
                    visitedCountries.map(item => {
                        return <li key={item.cca3.cca3}>{item.name.common}</li>
                    })
                }
            </ol>
            <div className='cards'>
                {
                    countries.map(country => 
                        <Country  
                            key={country.cca3.cca3}
                            country={country} 
                            handleVisitedCountries={handleVisitedCountries}
                        />)
                }
            </div>
        </div>
    );
};

export default Countries;