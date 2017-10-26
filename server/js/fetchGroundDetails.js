/**
 * Created by Sneha on 18/07/17.
 */
var ground=require('../models/models.js').ground;
var ObjectId = require('mongodb').ObjectID;
var grounds=function () {

};

grounds.prototype.fetchDetails= function (callback) {
    res={};
    ground.find({},{_id:1,title:1},function (err,data) {
        if(err){
            res.status=0;
            res.message="Error Occured";
        }else{
            res.status=1;
            res.message=data;
        }
        callback(res);
    })
};

grounds.prototype.fetchGroundDetails = function (id,callback) {
    res={};
    ground.find({_id:ObjectId(id)},function (err,data) {
        if(err){
            res.status=0;
            res.message="No ground Found";
        }else{
            res.status=1;
            res.message=data;
        }
        callback(res);
    })
}

module.exports=new grounds();