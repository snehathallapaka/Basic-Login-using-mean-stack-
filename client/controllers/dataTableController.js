/**
 * Created by Sneha on 01/08/17.
 */
var app = angular.module('firstAngularApp');

app.controller('dataTableCtrl', function($scope) {
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
});

function filterColumn ( i ) {
    $('#example').DataTable().column( i ).search(
        $('#col'+i+'_filter').val(),
        $('#col'+i+'_regex').prop('checked'),
        $('#col'+i+'_smart').prop('checked')
    ).draw();
}

// pass to jquery data table

$(onload).ready(function () {
    $('#example').DataTable();
    alert("In document ready");
    $('input.column_filter').on( 'keyup click', function () {
        filterColumn( $(this).parents('tr').attr('data-column') );
    } );
});