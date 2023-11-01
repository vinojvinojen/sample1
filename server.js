const express = require('express');
const cors = require('cors'); // Import the cors module

const app = express();

// Add the cors middleware to your Express app
app.use(cors());

// Your other Express app configurations and routes go here

// Start your Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
