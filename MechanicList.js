import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT + '/mechanics';
function MechanicsList() {
    const [mechanics, setMechanics] = useState([]);
    useEffect(() => {
        fetch(API_ENDPOINT)
            .then(response => response.json())
            .then(data => setMechanics(data))
            .catch(error => console.error('Error fetching mechanics:', error));
    }, []);
    return (
        <div>
            <h2>Mechanics</h2>
            <ul>
                {mechanics.map(mechanic => (
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
export default MechanicsList;