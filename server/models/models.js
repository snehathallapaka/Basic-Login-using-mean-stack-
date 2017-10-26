/**
 * Created by Sneha on 14/07/17.
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
var db=mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log('Conntected To Mongo Database');
});
var Schema = mongoose.Schema,ObjectId= Schema.ObjectId;
var groundSchema= new Schema({
    title: String,
    venue: {},
    categories: []
},{collection: 'grounds'});

groundSchema.index({title:"text",categories:"text",venue:'text'});

var groundModel = mongoose.model('grounds', groundSchema);

var userSchema=new Schema({
    username:String,
    password:String
},{collection:'users'});

var userModel = mongoose.model('users',userSchema);

module.exports = {ground:groundModel,user:userModel};