// Express is a dependency and must be installed using npm install express --save
const express = require('express');

const app = express();

app.get("/", (request, response) => {
  response.send("Welcome to Justin's Server. This is the home page.")
})

app.listen(3000, () => {
  console.log("The server is online. Visit it in your web browser at localhost:3000");
})
