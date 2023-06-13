require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const dbConnect = require('./config/mongo');

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3000;

// routes
app.use('/api',require("./routes/states"));
app.use('/api',require("./routes/users"));
app.use('/api',require("./routes/auth"));
app.use('/api',require("./routes/projects"));
app.use('/api',require("./routes/skills"));

app.listen(port, ()=>{
    console.log('tu app is ready puerto '+port)
});

dbConnect();