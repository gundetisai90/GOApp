const express = require('express')
const mongoDB = require('./db')
const app = express()
const port = 5000
app.use(express.json());

mongoDB();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api",require("./Routes/CreateUser"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})