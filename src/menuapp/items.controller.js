(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['items','$stateParams'];
function ItemsController(items,$stateParams) {
  var itemlist = this;
  itemlist.items = items.data.menu_items;
  itemlist.catname = $stateParams.categoryShortName
}

})();
