const express = require('express')

const app = express();
const proxy = require('express-http-proxy')

app.use('/',proxy(''))