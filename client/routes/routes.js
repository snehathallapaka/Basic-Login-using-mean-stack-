/**
 * Created by Sneha on 17/07/17.
 */

var app = angular.module("firstAngularApp", ["ngRoute", 'ngCookies','ngFileUpload','moment-picker','internationalPhoneNumber','ngIntlTelInput']).config(['momentPickerProvider', function (momentPickerProvider) {
    momentPickerProvider.options({
        /* Picker properties */
        // locale:        'en',
        format:        'LLL',
        minView:       'month',
        maxView:       'day',
        startView:     'day',
        autoclose:     true,
        // minutesStep:   30
        // minDate:
    });
}]);

app.config(function ($routeProvider, $locationProvider,$compileProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $locationProvider.hashPrefix('!');
    $routeProvider
        .when('/', {
            templateUrl: '/Views/login.html'
        }).when('/html/welcome', {
        templateUrl: '/Views/welcome.html'
        }).when('/html/groundDetails/:id',{
        templateUrl: '/Views/grounds.html'
        }).when('/html/groundDetails/:id',{
        templateUrl: '/Views/grounds.html'});
});