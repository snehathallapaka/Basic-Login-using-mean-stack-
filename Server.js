/**
 * Created by Sneha on 14/07/17.
 */
var grounds=require('./server/models/models.js').ground;
var search_String='aims';
var location='Bangalore';
var res=[];
function getStadiumsByIds(grounds) {
        grounds.find({$and: [{"venue.city":location},{$or: [{"title": new RegExp(search_String, "i")},{"venue.region":new RegExp(search_String, "i")},{"venue.address":new RegExp(search_String, "i")},{categories:new RegExp(search_String, "i")},]}]}, {
        title: 1,
        categories: 1,
        venue: 1
    }, function (err, data) {
        console.log(data);
    });
}
// $and:{ "venue.city":"Hyderabad"},

getStadiumsByIds(grounds);


// grounds.find( { $text: { $search:search_String,$caseSensitive:false}},{title:1,categories:1,venue:1}, function(err, data){
//     console.log(data);
// grounds.find({$text: {$search: search_String}},{title:1,categories:1,venue:1},function (err,data) {
//     console.log(data)
// })
// grounds.find({$and: [{"venue.city":"Hyderabad"},{$or: [{"title": {$regex: /squash/, $options: 'i'}},{"venue.region":{$regex: /squash/, $options: 'i'}},{"venue.address":{$regex: /squash/, $options: 'i'}},{categories:/squash/}]}]}, {
//     title: 1,
//     categories: 1,
//     venue: 1
// }, function (err, data) {
//     console.log(data);
// });

// SearchServices.fetchSecondarySearchResults({type:$scope.type,text:$scope.text},function (success) {
//     console.log($scope.type);
//     console.log($scope.text);
//     if(success.data.status) {
//         $scope.clinics = success.data.results;
//     } else {
//         alert('error');
//     }
// })