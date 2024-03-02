const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the React app's build folder
app.use(express.static(path.join(__dirname, "client/build")));

// Handle any other requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
