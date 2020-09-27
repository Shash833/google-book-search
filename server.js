const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const APIroutes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//passport sessions:
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

const User = require('./models/userSchema');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// API routes
app.use(APIroutes);

// Requests to React APP
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// // Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://shash833:password123@ds145312.mlab.com:45312/heroku_kq0m0hqv",
//   { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
// );

//Local MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleBooks", { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
