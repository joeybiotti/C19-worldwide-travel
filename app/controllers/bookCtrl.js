"use strict";

console.log("bookCtrl.js loaded");

app.controller("bookCtrl", function($scope, bookFactory){
  console.log("book controller loaded");
  bookFactory.getBooks()
  .then(function(itemCollection){
    $scope.guides = itemCollection;
    console.log("guidebooks", $scope.guidebooks);
  });
});
