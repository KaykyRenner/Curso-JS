require('dotenv').config()
const express = require("express");
const app = express();
const port = 3001;

const mongoose = require('mongoose')
mongoose.connect(process.env.connectDb).then(()=>{
  app.emit('to pronto')
}).catch(err =>{console.log(err)})

const routes = require("./routes");
const path = require("path");
const middleware = require("./src/middlewares/middleware")

const session = require('express-session');
const MongoStore = require('connect-mongo')
const flash = require('connect-flash');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")))

const sessionOpitions = session({
  secret:'.1das.;2asd,22dsad.dfg-sfg+dsf/dsa(0)*&!@SADDDDFGJUERT',
  store: MongoStore.create({
    mongoUrl:process.env.connectDb
  }),
  resave: false,
  saveUninitialized: false,
  cookie:{
    maxAge: 1000*60*60*24*7,
    httpOnly:true
  }
});

app.use(sessionOpitions);
app.use(flash());

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");
app.use(middleware)
app.use(routes);
app.on('to pronto',()=>{
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
})

