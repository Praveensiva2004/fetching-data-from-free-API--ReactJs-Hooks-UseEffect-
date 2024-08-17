
import React from 'react';
import ReactDOM from 'react-dom';

import { useState, useEffect } from 'react';

function First() {
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize as true to show loading initially
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
    
      <div style={{ display: "flex" }}>
        <h1>Users</h1>
        <ul>
          {user.map(userItem => (
            <li key={userItem.id}>
              <h2>{userItem.name}</h2>
              <p>{userItem.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

ReactDOM.render(<First />, document.getElementById('root'));