angular.module('wynDirective', [])
.directive('navBarDisplay', function(){
  return {
    restrict: 'E',
    templateUrl: '../partials/home.navBar.html',
    controller: 'NavController'
  };
})
.directive('wineListDisplay', function(){
  return {
    restrict: 'E',
    templateUrl: '../partials/home.wineList.html',
    controller: 'HomeController'
  };
})
.directive('titleHeaderDisplay', function(){
  return {
    restrict: 'E',
    templateUrl: '../partials/home.titleHeader.html'
  };
})
.directive('searchFormDisplay', function(){
  return {
    restrict: 'E',
    templateUrl: '../partials/home.searchForm.html',
    require: '^wineListDisplay'
  };
})
.directive('wineIndividualDisplay', function(){
  return {
    restrict: 'E',
    templateUrl: '../partials/home.wineIndividual.html'
    };
})
//cart split
.directive('cartPageDisplay', function(){
  return {
    restrict: 'E',
    templateUrl: '../partials/cart.cartdisplay.html'
    };
});
