import React, { useState } from 'react';

const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {
    const [visited, setVisited] = useState(false);
    // const [visitedFlugs, setvisitedFlugs] = useState()

    // console.log(handleVisitedCountries)
    const handleVisited = () => {
        // console.log("Btn Clicked");

        // Toggle this way
        // if(visited){

        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }
        
        // or this way toggle
        setVisited(!visited);

        // handle visited country and flag
        handleVisitedCountries(country);
        // handleVisitedFlag(country);
    }

    // const handleVisitedFlugs = () => {
    //     console.log('Flugs Btn Clicked')
    // }
    
    // console.log(country)
    return (
        <div className='card' style={{ backgroundColor: visited ? '#b0e4cc11' : '#B0E4CC'}}>
            <img src={country.flags.flags.svg} alt={country.flags.flags.alt} className='flags' />
            <h4>Name: {country.name.common}</h4>
            <p>Official Name: {country.name.official}</p>
            <p>populations: {country.population.population} {country.area.area >= 300000 ? <small style={{color: "tomato", border: "1px solid green", borderRadius: "10px", padding: "2px 7px", backgroundColor: "#E9ECEF"}}>Big</small> : <small style={{color: "green", border: "1px solid green", borderRadius: "10px", padding: "2px 7px", backgroundColor: "#E9ECEF"}}>Small</small>} <small style={{ fontWeight: "300" }}>country</small></p>

            {/* Button */}
            <button onClick={handleVisited} style={{  padding: "10px 18px", borderRadius: "10px" }}>{visited ? 'Visited' : 'Not Visited'}</button>

            <button 
                style={{ backgroundColor: '#202020', marginLeft: "8px", padding: "10px 18px", borderRadius: "10px" }}
                onClick={() => {
                    handleVisitedFlag(country.flags?.flags?.svg);
                }}
            >
                Visited Flugs
            </button>
        </div>
    );
};

export default Country;