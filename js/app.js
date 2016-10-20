angular.module('wyn', ['ngRoute', 'wynDirective']);

angular.module('wyn')
.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: '../partials/home.html',
    controller: 'HomeController'
  })
  .when('/about', {
    templateUrl: '../partials/about.html'
  })
  .when('/contact', {
    templateUrl: '../partials/contact.html'
  })
  .when('/cart', {
    templateUrl: '../partials/cart.html'
  });
  $locationProvider.html5Mode(true);
});
