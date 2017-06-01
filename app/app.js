"use strict";

console.log("app.js has loaded");

var app = angular.module("TravelGuideApp", ['ngRoute']);

app.config(function($routeProvide){
  $routeProvide.
  when('/', {
    templateUrl: 'partials/booklist.html',
    controller: 'bookCtrl'
  }).
  otherwise('/');
});
