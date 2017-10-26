/**
 * Created by Sneha on 01/08/17.
 */
var myApp = angular.module('myApp');
myApp.controller('MyCtrl', ['$scope', '$http', function ($scope, $http) {
    // load data from array as example
    // $scope.compiledStartPopupText = $compile(angular.element('<button type='button' ng-click='MyCtrl.dataTablesAlert()'> start quiz</button>'))($scope);
    $scope.items = [{
        name: 'foo',
        age: 28,
        testField: 'Hi'//"<button type="button">Click Me!</button>"
    }, {
        name: 'zzz',
        age: 31,
        testField: "Hi" //"<button type="button">Click Me!</button>"
    }, {
        name: 'bar',
        age: 28,
        testField: 'Hi'
    }];
}]);

//Use this to get data from server
/*
 $http.get('url').success(function (data, status, headers, config) {
 $scope.items = data;
 }).
 error(function (data, status, headers, config) {

 });
 */

function filterColumn ( i ) {
    $('#example').DataTable().column( i ).search(
        $('#col'+i+'_filter').val(),
        $('#col'+i+'_regex').prop('checked'),
        $('#col'+i+'_smart').prop('checked')
    ).draw();
}

// pass to jquery data table

$(document).ready(function () {
    $('#example').DataTable();
    $('input.column_filter').on( 'keyup click', function () {
        filterColumn( $(this).parents('tr').attr('data-column') );
    } );
});