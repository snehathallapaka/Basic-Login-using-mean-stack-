/**
 * Created by Sneha on 13/07/17.
 */
var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var grounds = require('./server/js/fetchGroundDetails.js');
var validate = require('./server/js/verifyAuthentication.js');
var maps = require('./server/js/mapMarker.js');

app.use(bodyParser.json());
app.use(cookieParser())
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('client'));
app.set('superSecret', 'mtwlabs.com');

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname + '/client/Views/'})
    // res.send("Ping Successfull!");
});

app.post('/login', function (req, res) {
    // console.log(app.get('superSecret'));
    validate.checkAuthentication(app.get('superSecret'), req.body.name, req.body.password, function (result) {
        console.log(result);
        res.send(result);
    });
});

app.post('/upload',multipartMiddleware,function (req,res) {
    console.log("In routes ",req.files.files);
    var retObj={};
    retObj.status=true;
    retObj.message="Upload Successfull";
    res.json(retObj);
});

app.use(function (req, res, next) {

    var token = req.cookies.token;
    if (/\.html/.test(req.url)) {
        next();
    } else if (token) {
        jwt.verify(token, app.get('superSecret'), function (err, decoded) {
            if (err) {
                return res.json({success: false, message: 'Failed to authenticate token.'});
            } else {
                next();
            }
        });

    } else {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
});

app.get('/ground', function (req, res) {
    grounds.fetchDetails(function (result) {
        res.send(result);
    })
});

app.post('/groundDetails', function (req, res) {
    grounds.fetchGroundDetails(req.body.id, function (result) {
        res.send(result);
    })
});

app.get('markMap',function (req,res) {
    map.initMap(function (result) {
        res.send(result);
    })
});



app.use(function (req, res) {
    res.sendFile('login.html', {root: __dirname + '/client/Views/'})
});

app.listen(3300);