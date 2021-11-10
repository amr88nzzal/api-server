'use strict';

const express = require("express");
const app = express();
require('dotenv').config();

//--------------------------

const foodRouter= require('./routes/food.route')
const clothesRouter= require('./routes/clothes.route')
const err404 = require("./error-handler/404");
const err500 = require("./error-handler/500");
const logger = require("./middleware/logger");

//--------------------------

//--------------------------
app.use(express.json())
app.use(logger);
app.get('/',(req,res)=>{ res.status(200).send('Server Is Live');})
app.use(foodRouter);
app.use(clothesRouter)
app.use('*',err404);
app.use(err500);





function start(port) {
    app.listen(port, () => {
      console.log('The server is live at port: ', port);
    });
  }
module.exports={
  server:app,
    start:start
}