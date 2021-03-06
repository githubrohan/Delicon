var express  = require('express');
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
const mongoose = require("mongoose");
var passport = require('passport');
var LocalStrategy = require('passport-local');
var reservationRouter = require("./routes/reservation");
var authRouter = require("./routes/auth");
const User = require('./models/user');
app.use(require("express-session")({
    secret:"delicon",
    resave:false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.currentUser=req.user;
    next();
})
app.use(reservationRouter);
app.use(authRouter);
const port = process.env.PORT || "5000";

mongoose
  .connect(
     "mongodb+srv://admin1234:admin1234@cluster0.rrw0t.mongodb.net/delicon?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(port, (req, res) => {
      console.log("server is running");
    });
  })
  .catch((err) => console.log(err));
