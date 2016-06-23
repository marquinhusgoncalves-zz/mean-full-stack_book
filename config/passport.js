var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var findOrCreate = require('mongoose-findorcreate');
var mongoose = require('mongoose');

module.exports = function() {
  var Usuario = mongoose.model('Usuario');
  passport.use(new GitHubStrategy({
    clientID: '4a7f14a65738a7d1cb13',
    clientSecret: '424750fb9e8e75c5d513fea8daac10d62512c5d4',
    callbackURL: 'http://localhost:3000/auth/github/callback'
  }, function(accessToken, refreshToken, profile, done) {
    Usuario.findOrCreate(
      { "login" : profile.username },
      { "nome" : profile.username },
      function(erro, usuario) {
        if(erro) {
          console.log(erro);
          return done(erro);
        }
        return done(null, usuario);
      }
    );
  }));
  passport.serializeUser(function(usuario, done) {
	  done(null, usuario._id);
  });

  passport.deserializeUser(function(id, done) {
    Usuario.findById(id).exec()
    .then(function(usuario) {
      done(null, usuario);	
    });
  });
};