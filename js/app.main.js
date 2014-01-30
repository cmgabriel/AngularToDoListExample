/**
 * Created by Jay on 1/28/14.
 */

var app = angular.module("todolistapp", ['ngRoute','ngAnimate']);

app.config(function ($routeProvider) {
    console.log("Test Content");
    $routeProvider.when('/', {
        controller: 'MainController',
        templateUrl: "views/mainView.html"
    }).
    otherwise({redirectTo:"/"});
});