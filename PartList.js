import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Simple caching mechanism
const partsCache = {};

const PartsList = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    const fetchParts = async () => {
      const partsUrl = `${process.env.REACT_APP_API_URL}/parts`;
      
      // Use cached data if available
      if (partsCache[partsUrl]) {
        console.log('Using cached parts data');
        setParts(partsCache[partsUrl]);
        return;
      }

      try {
        const response = await fetch(partsUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch parts: ${response.status}`);
        }
        const data = await response.json();
        
        // Cache the fetched data
        partsCache[partsUrl] = data;
        setParts(data);
      } catch (error) {
        console.error('Failed to fetch parts:', error);
      }
    };

    fetchParts();
  }, []);

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