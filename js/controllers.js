angular.module('wyn')
.controller('HomeController', function($scope, wynService){
  // setup
  $scope.view = {};
  $scope.view.title = 'Wyn';
  // wine data
  $scope.view.wineData = wynService.wineData;
  // display
  $scope.view.sortOptions = [
    {order: true, name: 'Price Descending'},
    {order: false, name: 'Price Ascending'}
  ];
  $scope.view.categories = wynService.getCategories();
  // wine details
  $scope.view.viewDetails = [];
  $scope.toggleDetails = function(wineID){
    $scope.view.viewDetails[wineID] = !$scope.view.viewDetails[wineID];
  };
  // cart
  $scope.view.cart = wynService.cart;
  $scope.view.cartTotal = {};
  $scope.addToCart = function(wineID, price){
    var quantity = $scope.view.addQuantity;
    wynService.addToCart(wineID,quantity,price);
    $scope.toggleDetails(wineID);
    $scope.view.cartTotal = wynService.cartSubtotal();
    console.log('scope.view.cartTotal', $scope.view.cartTotal);
  };
})
.controller('NavController', function($scope, wynService){

});
