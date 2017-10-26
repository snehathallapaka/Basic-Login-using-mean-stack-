/**
 * Created by Sneha on 17/07/17.
 */
var users=require('../models/models.js').user;
var jwt    = require('jsonwebtoken');

var auth=function(){
};

auth.prototype.checkAuthentication= function (secret,userName,userPassword,callback) {
    res={};
    users.find({username:userName},function(err, data) {
        console.log("User password "+userPassword);
        // console.log("DB Password "+data.password);
        if(err){
            res.status=0;
            res.message="Error Occured";
            callback(res);
        }else if(data[0].password==userPassword){
            var token = jwt.sign(data[0], secret, {
                expiresIn: 3000
            });
            res.status=1;
            res.message="Passwords Match";
            res.token=token;
            callback(res);
        }else{
            res.status=0;
            res.message="Invalid Credentials";
            callback(res);
        }

    })
};


// function checkAuthentication(userName,userPassword,callback) {
//     res={};
//     users.find({username:userName},function(err, data) {
//         if(err){
//             res.status=0;
//             res.message="Error Occured";
//             callback(res);
//         }else if(data.password==userPassword){
//             res.status=1;
//             res.message="Passwords Match";
//             callback(res);
//         }else{
//             res.status=0;
//             res.message="Invalid Credentials";
//             callback(res);
//         }
//
//     })
// }
module.exports=new auth();

