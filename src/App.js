// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from your JSON Server
    axios.get('https://vinojvinojen.github.io/sample1/')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>JSON Server Example</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.MACAddress}>{post.IpAddress}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
