(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/categories.template.html',
    controller: 'CategoriesController as categ',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        // console.log(MenuDataService.getAllCategories());
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/items/{categoryShortName}',
    templateUrl: 'src/menuapp/templates/items.template.html',
    controller: 'ItemsController as items',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              //   console.log($stateParams.categoryShortName);
              // console.log(MenuDataService.getItemsForCategory($stateParams.categoryShortName));
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
                // .then(function (items) {
                //   return items[$stateParams.categoryShortName];
                // });
            }]

    }
  });
}

})();
