angular.module('wyn')
.controller('NavController', function($scope, wynService){

})

.controller('HomeController', function($scope, wynService){
  // setup
  $scope.view = {};
  $scope.view.title = 'Wyn';
  // wine data
  $scope.view.wineData = wynService.wineData;
  // display
  $scope.view.sortOptions = [
    {name: 'Price Descending', value:'+price'},
    {name: 'Price Ascending', value:'-price'}
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
  $scope.addToCart = function(wineID){
    var quantity = $scope.view.addQuantity[wineID];
    wynService.addToCart(wineID,quantity);
    $scope.toggleDetails(wineID);
    $scope.view.cartTotal = wynService.cartSubtotal();
  };
})

.controller('CartController', function($scope, wynService){
  $scope.view = {};
  // wine data
  $scope.view.wineData = wynService.wineData;
  $scope.view.cartTotal = wynService.cartSubtotal();
  $scope.view.showCheckoutStatement = false;
  $scope.updateQuantity = function(wineID){
    var newQuantity = $scope.view.updateQuantity[wineID];
    wynService.updateCart(wineID, newQuantity);
    $scope.view.cartTotal = wynService.cartSubtotal();
  };

  $scope.removeFromCart = function(wineID){
    wynService.removeFromCart(wineID);
    $scope.view.cartTotal = wynService.cartSubtotal();
    $scope.view.wineData = wynService.wineData;
  };

  $scope.toggleCheckout = function(){
    $scope.view.showCheckoutStatement = !$scope.view.showCheckoutStatement;
  };

});
