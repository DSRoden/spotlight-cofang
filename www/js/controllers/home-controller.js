(function(){
  'use strict';

  angular.module('spotlight-famous')
  .controller('HomeCtrl', ['$scope', '$timeout', '$location', '$famous', function($scope, $timeout, $location, $famous){
     var EventHandler = $famous['famous/core/EventHandler'];

    $scope.views = [{color: 'red'}, {color: 'blue'}, {color: 'green'}, {color: 'yellow'}, {color: 'orange'}];

    $scope.myEventHandler = new EventHandler();
    $scope.eventHandler = new EventHandler();
    $scope.list = [{content: 'famous'}, {content: 'angular'}, {content: 'rocks!'}];
    $scope.getPageWidth = function(){
      return window.innerWidth;
    };

    $scope.options = {
      scrollViewTwo: {
        direction: 0,
        paginated: true
      },
       scrollViewOne: {
        direction: 1,
        paginated: true
      },
      container: {
        clipSize: window.innerHeight
      }
    };


  }]);
})();
