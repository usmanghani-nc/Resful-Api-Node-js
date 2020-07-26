const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv/config')
const postRoutes = require('./routes/post')

const app = express();

app.use(bodyParser.json())
app.use(cors())

// ROUTES
app.get('/', (req, res) => {
    res.send("working")
})

app.use('/posts', postRoutes)

// CONNECT DB
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
}, () => app.listen(3000, () => console.log("server running on 3000")))