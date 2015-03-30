(function(){
  'use strict';

  angular.module('spotlight-famous')
  .controller('HomeCtrl', ['$scope', '$timeout', '$location', '$famous', '$timeline', function($scope, $timeout, $location, $famous, $timeline){
    //shows and hide scope variables
    $scope.spotlightHeaderOn =  true;

    var EventHandler = $famous['famous/core/EventHandler'];

    $scope.views = [{color: 'red'}, {color: 'blue'}, {color: 'green'}, {color: 'yellow'}, {color: 'orange'}, {color: 'red'}, {color: 'blue'}, {color: 'green'}, {color: 'yellow'}, {color: 'orange'}];

    $scope.myEventHandler = new EventHandler();
    $scope.eventHandler = new EventHandler();
    $scope.list = [{content: 'famous'}, {content: 'angular'}, {content: 'rocks!'}];
    $scope.getPageWidth = function(){
      return window.innerWidth;
    };
    $scope.getPageHeight = function(){
      return window.innerHeight;
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

    //transitions and animations
    // var Transitionable = $famous['famous/transitions/Transitionable'],
    // Easing = $famous['famous/transitions/Easing'];

    // $scope.t = new Transitionable(0);

    // $scope.yRotation = $timeline([
    //   [0, 0, Easing.inOutQuad],
    //   [0.8, 1.1 * (Math.PI/2), Easing.inOutQuart],
    //   [1, Math.PI/2]
    // ]);

    // $scope.translation = $timeline([
    //   [0, [100, 100, 0], Easing.inOutQuad],
    //   [1, [400, 200, 0]]
    // ]);
    //fading somethign out
    var scrollView;
    $scope.scrollViewHandler = new EventHandler();
    $timeout(function(){
      scrollView = $famous.find('#main-scrollview')[0].renderNode;
      $scope.scrollViewHandler = scrollView.sync;
       $scope.scrollViewHandler.on('start', function(event){
          console.log('start', event);
          console.log('start event position', scrollView.getPosition());
          console.log('start event velocity', scrollView.getVelocity());
          // if(scrollView.getPosition() >= 41){
          //   $scope.spotlightHeaderOn=  false;
          //   $scope.$digest();
          // }
        });
       $scope.scrollViewHandler.on('end', function(event){
          console.log('end event', event);
          console.log('end event position', scrollView.getPosition());
          console.log('end event velocity', scrollView.getVelocity());
          // if(scrollView.getVelocity() >= 0){
          //   $scope.spotlightHeaderOn = true;
          if(scrollView.getVelocity() > 0){
            console.log('turn header off');
            $scope.spotlightHeaderOn= false;
            $scope.$digest();
          } else {
            $scope.spotlightHeaderOn= true;
            $scope.$digest();
          }
        });
    }, 1000);
  }]);
})();
