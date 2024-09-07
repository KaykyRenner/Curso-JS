require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000;

const mongoose = require('mongoose');
mongoose.connect(process.env.connectDb).then(()=>{
  app.emit('to pronto')
}).catch(err =>{console.log(err)});

const routes = require("./routes");
const path = require("path");
const middleware = require("./src/middlewares/middleware");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));


app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(middleware);

app.use(routes);

app.on('to pronto',()=>{
  app.listen(port, () => {
    console.log(`http://localhost:${port}`);
  });
})

