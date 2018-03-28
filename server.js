const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const passport = require('passport');
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local');
const bCrypt = require('bcrypt-nodejs');
const PORT = process.env.PORT || 3001;

// Import models
const User = require('./backend/models/user');

// Import auth routes
const login = require('./backend/auth/login');
const register = require('./backend/auth/register');
const logout = require('./backend/auth/logout');
const changePassword = require('./backend/auth/changePassword');
const forgot = require('./backend/auth/forgot');
const reset = require('./backend/auth/reset');
const verify = require('./backend/auth/verify');

// Import other routes
const contact = require('./backend/routes/contact')();

// Pull all env variables are present
const {
  MONGODB_URI,
  SENDGRID_API_KEY,
  SENDGRID_EMAIL,
} = process.env;

// Ensure that each variable is present
let envError = "";
if (!MONGODB_URI) envError = "MONGODB_URI";
else if (!SENDGRID_API_KEY) envError = "SENDGRID_API_KEY";
else if (!SENDGRID_EMAIL) envError = "SENDGRID_EMAIL";
if (envError) {
  console.error(`ERROR: ${envError} environment variable not found`);
  process.exit(1);
}

// Connecting to mongo
const options = {
  useMongoClient: true,
  server: {
    // sets how many times to try reconnecting
    reconnectTries: Number.MAX_VALUE,
    // sets the delay between every retry (milliseconds)
    reconnectInterval: 1000,
  },
};
mongoose.connect(MONGODB_URI, options);

// Middleware
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true}));

// Passport configuration work, makes sessions persistant
const expressSession = require('express-session');
const MongoStore = require('connect-mongo')(expressSession);
app.use(
  expressSession({
    secret: 'mySecretKey',
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    }),
    resave: true,
    saveUninitialized: true,
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());
const initPassport = require('./backend/auth/init');
initPassport(passport);

// Passport strategy
passport.use('local', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
}, (username, password, done) => {
  User.findOne({ username: username }, (err, user) =>{
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false, { message: 'Incorrect email.' });
    }
    if (!isValidPassword(user, password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  });
}
));

// API route to ensure API is running
app.get('/api/', (req, res) => {
  res.send({
     success: true,
     data: 'Server is up and running!'
   });
});

// Method to check encrypted password
const isValidPassword = (user, password) => {
  return bCrypt.compareSync(password, user.password);
};

// Routing backend middleware for auth routes
app.use('/api/', login(passport));
app.use('/api/', register(passport));
app.use('/api/', logout(passport));
app.use('/api/', changePassword(passport));
app.use('/api/', forgot(passport));
app.use('/api/', reset(passport));
app.use('/api/', verify(passport));

// Routing backend middleware for other routes
app.use('/api/contact', contact);

app.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
