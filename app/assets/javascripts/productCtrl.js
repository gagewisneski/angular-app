(function(){
  "use stricy";

  angular.module("app").controller("productCtrl", function($scope) {

    $scope.products = [
      {
        name: "Socks",
        price: 5
      },
      {
        name: "Shoes",
        price: 10
      },
      {
        name: "Pants",
        price: 15
      }
    ];

    $scope.subtotal = 0;
    $scope.tax = 0;
    $scope.total = 0;

    $scope.cartedProducts = [];

    $scope.priceAdd = function(product) {
      $scope.total = ($scope.total + product.price);
      $scope.tax = (.09 * $scope.total);
      $scope.subtotal = ($scope.total + $scope.tax);

      $scope.cartedProducts.push(product); 
    }

    
    $scope.removeProduct = function(index) {
      $scope.cartedProducts.splice(index, 1);
    }

    $scope.priceSub = function(product, index) {
      $scope.total = ($scope.total - product.price);
      $scope.tax = (.09 * $scope.total);
      $scope.subtotal = ($scope.total + $scope.tax);

      $scope.removeProduct(index);
    }



    $scope.quantity = function(product) {

    }


    window.$scope = $scope;

  });

})();