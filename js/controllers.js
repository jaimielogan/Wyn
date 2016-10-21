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
  $scope.addToCart = function(wineID, price){
    var quantity = $scope.view.addQuantity;
    wynService.addToCart(wineID,quantity,price);
    $scope.toggleDetails(wineID);
    $scope.view.cartTotal = wynService.cartSubtotal();
    console.log('scope.view.cartTotal', $scope.view.cartTotal);
  };
})

.controller('CartController', function($scope, wynService){
  
});
