//config/express.js
var express = require('express')
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {
    var app = express();

    //configuração de ambiente
    app.set('port', 3000);
    
    // abaixo do middleware express.static
    app.use(express.static('./public'));
    app.set('view engine', 'ejs');
    app.set('views','./app/views');
  
    // novos middleware
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override')())
    
    load('models', {cwd: 'app'})
     .then('controllers')
     .then('routes')
     .into(app);
    
    return app;
};