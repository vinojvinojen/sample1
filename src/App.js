import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'https://testapi-wpwh.onrender.com/APIGateways';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Retrieve the existing gateway data from local storage
    // readApiConfig()
    // reloadData()
    const readApiConfig = async () => {
      try {
        // Make an Axios GET request to retrieve the data
        const response = await axios.get(API_BASE_URL);
        // const response=await ReadApiConfig(token)
        // setAPIGateways(response.data[0].APIGateways); // Access APIGateways within the response structure
        // setLocks(locks);
        setPosts(response.data); // Access APIGateways within the response structure

        console.log(response.data);
      } catch (error) {
        console.error("Error reading API config:", error);
      }
    };

    // Call the readApiConfig function to retrieve API gateways
    readApiConfig();
  }, []);

  return (
    <div className="App">
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.MACAddress}>{post.IpAddress}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
