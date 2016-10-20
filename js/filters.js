angular.module('wyn')
.filter('fractionCurrency', function(){
  return function(input){
    var output = Number(input)/100;
    return output;
  };
});
