import { useEffect } from "react";
import { useState } from "react";

import './Countries.css'
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([])

    // Visited Countries
    const [visitedCountries, setVisitedCountries] = useState([])

    // Visited Countries Flags:
    const [visitedFlags, setVisitedFlags] = useState([])

    // Visited Flags Event Handler Function:
    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
    }

    // Visited Countries Event Handler Function:
    const handleVisitedCountry = (country) => {
        const newVisitedCountry = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountry)
    }

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h3>Countries: {countries.length} </h3>

            {/* Visited Countries */}
            <div>
                <h4>Visited Countries: {visitedCountries.length} </h4>
                <ol>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ol>
            </div>

            {/* Visited Countries flags */}
            <div className="flags-container">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag} alt="" />)
                }
            </div>

            <div className="country-container">
                {
                    countries.map(country => <Country key={country.ccn3} country={country} handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlags={handleVisitedFlags}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;