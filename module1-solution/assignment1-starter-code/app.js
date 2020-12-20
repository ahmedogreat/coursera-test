(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
  $scope.dishes = "";
  $scope.msg = "";

  $scope.checkLunch = function () {
    var itemCount=0;
    var arrDishes=$scope.dishes.trim().split(',');
    for(var i=0; i<arrDishes.length; i++){
      if(arrDishes[i].trim()){
        itemCount++;
      }
    }
    console.log(itemCount);

    if(itemCount > 3){
      $scope.msg="Too much!";
    }else if(itemCount > 0){
      $scope.msg="Enjoy!";
    }
  };
}

})();
