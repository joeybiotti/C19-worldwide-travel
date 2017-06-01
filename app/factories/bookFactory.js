"use strict";

console.log("bookFactory.js loaded");

app.factory("bookFactory", function($q, $http) {
  let getBooks = () => {

    return $q((resolve, reject) => {
      $http.get('./data/guides.json')
        .then((itemObject) => {
          let itemCollection = itemObject.data;
          console.log("itemCollection", itemCollection);
          resolve(itemCollection.guidebooks);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  return {
    getBooks
  };
});
