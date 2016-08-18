var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

var strategy = new Auth0Strategy({
    domain:       'abdulazizpr.auth0.com',
    clientID:     'f01t0GdcyAkG1Rkd24FB6fZUeL9iHpKF',
    clientSecret: 'DCNBmIOo0P-qaw6REsF6mLpfy1amft52E-UM7T4bwk9VfPomXCdJ1vnof9g3OGW8',
    callbackURL:  '/callback'
  }, function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  });

passport.use(strategy);

// This is not a best practice, but we want to keep things simple for now
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = strategy;