import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PartsList = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    const fetchParts = async () => {
      const partsUrl = `${process.env.REACT_APP_API_URL}/parts`;
      try {
        const response = await fetch(partsUrl);
        const data = await response.json();
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