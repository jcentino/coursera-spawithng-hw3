(function() {
'use strict';

angular.module('NarrowItDownApp')
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    // return $http({
    //   method: "GET",
    //   url: (ApiBasePath + "/menu_items.json")
    // }).then(function (response) {
    //   console.log(response.data);
    //   var foundItems = response.data;
    //   console.log("foundItems: ", foundItems);
    //   return foundItems;
    // }).catch(function (error) {
    //   console.log("Something went terribly wrong.");
    // });
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    });

    return response;
  };
}

})();
