import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const partsCache = {};

const PartsList = () => {
  const [parts, setParts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchParts = async () => {
      const partsUrl = `${process.env.REACT_APP_API_URL}/parts`;
      
      if (partsCache[partsUrl]) {
        console.log('Using cached parts data');
        setParts(partsCache[partsUrl]);
        return;
      }

      try {
        const response = await fetch(partsUrl);
        if (!response.ok) {
          setError(`Failed to fetch parts: ${response.status} ${response.statusText}`);
          return;
        }
        const data = await response.json();
        
        partsCache[partsUrl] = data;
        setParts(data);
        setError('');
      } catch (error) {
        console.error('Network error occurred:', error);
        setError('Network error: Could not load parts. Please try again later.');
      }
    };

    fetchParts();
  }, []);

  if (error) {
    return (
      <div>
        <h2>Parts List</h2>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Parts List</h2>
      <ul>
        {parts.map(part => (
          <li key={part.id}>
            <Link to={`/parts/${part.id}`}>
              {part.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PartsList;