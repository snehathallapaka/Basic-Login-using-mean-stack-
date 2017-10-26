/**
 * Created by Sneha on 17/07/17.
 */

var app = angular.module('firstAngularApp');

app.controller('loginCtrl', function($scope,$http,$location,$routeParams, $cookies,Upload) {
    $scope.averageRatingValue=3;
    $scope.verifyCredentials = function () {
        console.log("In Verify Credentials");
        $http({
            method: 'POST',
            url: '/login',
            data: $scope.userData //forms user object
        }).then(function (success) {
            if (success.data.status) {
                console.log("Login Successful");
                $cookies.put('token', success.data.token);
                $location.path('/html/welcome');
            } else {
                console.log("Login unsuccessful");
            }
        }, function (response) {
        });
    };

    $scope.getGrounds = function () {
        $http({
            method: "GET",
            url: "/ground"
        }).then(function (response) {
            $scope.data = response.data.message;
        }, function (response) {
        });
    };

    $scope.getEachGroundDetails = function () {
        $http({
            method: "POST",
            url: '/groundDetails',
            data: {id: $routeParams.id}
        }).then(function (response) {
            if (response.data.status) {
                $scope.eachGroundData = response.data.message[0];
                // console.log(response.data.message[0].title);
                // $location.path('/html/groundDetails/'+id);
            }
        }, function (response) {
        });
    };

    $scope.getId = function (id) {
        $location.path('/html/groundDetails/' + id);
    };

    $scope.jobTitle=['Doctor','Engineer'];

    $scope.data=[{jobTitle:'Doctor',name:'Satya'},{jobTitle:'Doctor',name:'Asha'},{jobTitle:'Engineer',name:'Sneha'}];

    $scope.selectedTitle='';

    $scope.countries = {
        'UAE': {
            'Dubai': ['Dubai'],
            'Abu Dhabi':['Abu Dhabi','Ail Ain'],
            'Sharjah':['Sharjah'],
            'Ajman':['Ajman'],
            'Ras Al Khaimah':['Ras Al Khaimah'],
            'Fujairah':['Fujairah'],
            'Umm al-Quwain':['Umm al-Quwain']
        }
    };

    function getKeyFromValue() {

    }

    $scope.jobChange = function () {
        $scope.results=[];
        for(var i=0;i<$scope.data.length;i++) {
            if($scope.data[i].jobTitle===$scope.selectedTitle){
                $scope.results.push($scope.data[i]);
            }
        }
        console.log($scope.results);
    };

    $scope.uploadFile = function () {
        Upload.upload({
            url: '/upload',
            data: {
                files:$scope.myFile
            }
        }).then(function (response) {
            // file.result = response.data;
            console.log(response.message);
        });
    };

        var ctrl = this;
        ctrl.minDate = moment()//.subtract(3, 'day');
        ctrl.maxDate = moment().add(3, 'day');
}).directive("averageStarRating", function() {
    return {
        restrict : "EA",
        template : "<div class='average-rating-container'>" +
        "  <ul class='rating background' class='readonly'>" +
        "    <li ng-repeat='star in stars' class='star'>" +
        "      <i class='fa fa-star'></i>" + //&#9733
        "    </li>" +
        "  </ul>" +
        "  <ul class='rating foreground' class='readonly' style='width:{{filledInStarsContainerWidth}}%'>" +
        "    <li ng-repeat='star in stars' class='star filled'>" +
        "      <i class='fa fa-star'></i>" + //&#9733
        "    </li>" +
        "  </ul>" +
        "</div>",
        scope : {
            averageRatingValue : "=ngModel",
            max : "=?", //optional: default is 5
        },

        link : function(scope, elem, attrs) {
            if (scope.max == undefined) { scope.max = 5; }
            function updateStars() {
                scope.stars = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({});
                }
                var starContainerMaxWidth = 100; //%
                scope.filledInStarsContainerWidth = scope.averageRatingValue / scope.max * starContainerMaxWidth;
            };
            scope.$watch("averageRatingValue", function(oldVal, newVal) {
                if (newVal) { updateStars(); }
            });
            // updateStars();
        }
    };
});

