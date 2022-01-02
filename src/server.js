'use strict';
const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')


const config = require('./config/config.js')


const app = express()

app.use(cors())
app.use(bodyparser.json())

app.use('/api', eventRoutes.router)

app.listen(config.port, () => console.log('Server is listening on http://localohost:' + config.port));

