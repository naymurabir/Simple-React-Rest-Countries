import { useState } from 'react';
import './Country.css'


const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {

    const { name, flags, area, population } = country

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited)
    }

    return (
        <div className={`country ${visited ? 'country-visited' : 'country'}`}>
            <h3 style={{ color: visited ? 'purple' : 'white' }}>Name: {name.common}</h3>
            <img className='flags-style ' src={flags.png} alt="" />
            <h4>Area {area} </h4>
            <h4>Population: {population}</h4>

            <button onClick={() => { handleVisitedFlags(flags.png) }}>Add Flags</button>

            <button onClick={() => { handleVisitedCountry(country) }}>Mark as Visited Country</button>
            <br /> <br />

            <button onClick={handleVisited}> {visited ? 'Visited' : 'Will Go'} </button>
            {visited ? "I have visited the Country!" : "I will Visit!"}
        </div>
    );
};

export default Country;