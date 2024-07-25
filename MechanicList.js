import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MECHANICS_API_URL = process.env.REACT_APP_API_ENDPOINT + '/mechanics';

function MechanicsList() {
    const [mechanicList, setMechanicList] = useState([]);

    useEffect(() => {
        fetchMechanics();
    }, []);

    const fetchMechanics = () => {
        fetch(MECHANICS_API_URL)
            .then(response => response.json())
            .then(mechanicData => setMechanicList(mechanicData))
            .catch(error => console.error('Error fetching mechanic list:', error));
    };

    return (
        <div>
            <h2>Mechanics Directory</h2>
            <ul>
                {mechanicList.map(mechanic => (
                    <li key={mechanic.id}>
                        <Link to={`/mechanics/${mechanic.id}`}>
                            {mechanic.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Mechanicsp