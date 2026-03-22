import React, { use, useState } from 'react';
import Country from '../Country/Country';

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries)

    // count visited Countries
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);

    const handleVisitedCountries = (country) => {
        // setVisitedCountries()
        // console.log('Click Visited Countries = ', country.name.common)
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlag = (flag) => {
        // console.log('Flag need to be added = ', flag)
        const newVisitedFlag = [...visitedFlag, flag];
        setVisitedFlag(newVisitedFlag);
    }

    return (
        <div >
            <h3>List of countries Quantity: {countries.length}</h3>
            <h3>Visited countries: {visitedCountries.length}</h3>
            <h3>Total Flag Visited: {visitedFlag.length}</h3>
            <ol>
                {
                    visitedCountries.map(item => {
                        return <li key={item.cca3.cca3}>
                            {item.name.common}
                            </li>
                    })
                }
            </ol>
            <div>
                {
                    visitedFlag.map((item, index) => <img key={index} style={{ marginRight: "10px", width:"80px", height: "70px"}}  src={item}></img>)
                }
            </div>
            <div className='cards'>
                {
                    countries.map(country => 
                        <Country  
                            key={country.cca3.cca3}
                            country={country} 
                            handleVisitedCountries={handleVisitedCountries}
                            handleVisitedFlag={handleVisitedFlag}
                        />)
                }
            </div>
        </div>
    );
};

export default Countries;