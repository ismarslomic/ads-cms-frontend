var gzippo = require('gzippo'),
    express = require('express'),
    path = require('path'),
    app = express();

// Start Exoress server
app.set('port', process.env.PORT || 5000);
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
// below is not on use when using res.sendfile
app.use(gzippo.staticGzip(path.join(__dirname, 'app')));
app.listen(app.get('port'));
console.log("Server is listening on port " + app.get('port'));


// Route "/" to app-/index.html
app.get('/', function (req, res) {
    res.sendfile('./app/index.html');
});