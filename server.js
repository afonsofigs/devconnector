//git add . ; git commit -am 'Texto'
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

//Link from api
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

//Init app
const app = express();

//Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//DB config
const db = require("./config/keys").mongoURI;

//Connect to mongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

//Passport Middleware
app.use(passport.initialize());

//Passport Config
require("./config/passport.js")(passport);

//Connect the url to the files, routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

//Homepage
app.get("/", (req, res) => res.send("Hi"));
//port, 1st part is for heroku
const port = process.env.PORT || 5000;
//As server starts
app.listen(port, () => console.log("Server running on 5000"));
