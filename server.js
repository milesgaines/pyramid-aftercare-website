const express = require('express');
const path = require('path');
const app = express();

const buildPath = path.join(__dirname, 'build');

// Serve static files from the React app build directory
app.use(express.static(buildPath));

// Handle React Router - send all requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`🚀 Pyramid After Care Portal running on port ${port}`);
  console.log(`📱 Application: http://localhost:${port}`);
  console.log(`👨‍⚕️ Admin Portal: http://localhost:${port}/admin`);
  console.log(`👤 Patient Portal: http://localhost:${port}/patient`);
  console.log(`📋 Insurance: http://localhost:${port}/insurance`);
});
