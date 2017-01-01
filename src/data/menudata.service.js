(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {
  var service = this;

  // List of shopping items
  var items = [];

  service.getAllCategories = function() {
    // console.log('TZ');
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });

    return response;


  };

  service.getItemsForCategory = function (categoryShortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: categoryShortName
      }
    });

    return response;
  };


}

})();
