var express = require('express');
var app = express();
var dotenv = require('dotenv');
var jwt = require('jsonwebtoken');
dotenv.config();
const app_port = process.env.port || 8081;
app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('Hello World');
});

app.get('/jwt', function(req, res) {
    var token = jwt.sign({ data: 'trong nhan' }, process.env.jwt_secrete, {
        expiresIn: '1h',
        algorithm: "HS256",
        keyid: 'sim2'
    });
    return res.status(200).json({
        access_token: token
    });
});

var server = app.listen(app_port, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})