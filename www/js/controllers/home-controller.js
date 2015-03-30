(function(){
  'use strict';

  angular.module('spotlight-famous')
  .controller('HomeCtrl', ['$scope', '$timeout', '$location', '$famous', '$timeline', function($scope, $timeout, $location, $famous, $timeline){
    //animations
    var Transitionable = $famous['famous/transitions/Transitionable'],
        Easing = $famous['famous/transitions/Easing'];

    $scope.boxTransitionableHeader = new Transitionable([0, 0, 0]);
    $scope.boxTransitionableFooter = new Transitionable([0, 0, 0]);
    $scope.opacityTrans = new Transitionable(1);

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

    //navbar disappears on scroll down and reappears on scroll up
    var scrollView;
    $scope.scrollViewHandler = new EventHandler();
    $timeout(function(){
      scrollView = $famous.find('#main-scrollview')[0].renderNode;
      $scope.scrollViewHandler = scrollView.sync;
       $scope.scrollViewHandler.on('start', function(event){
          // console.log('start', event);
          // console.log('start event position', scrollView.getPosition());
          // console.log('start event velocity', scrollView.getVelocity());
        });
       $scope.scrollViewHandler.on('end', function(event){
          // console.log('end event', event);
          // console.log('end event position', scrollView.getPosition());
          // console.log('end event velocity', scrollView.getVelocity());
          var windowHeight = window.innerHeight;
          if(scrollView.getVelocity() > 0){
            //console.log('turn header off');
            //$scope.spotlightHeaderOn= false;
            $scope.boxTransitionableHeader.set([0, -40, 0], {duration: 300, curve: Easing.easeOut});
            $scope.boxTransitionableFooter.set([0, windowHeight, 0], {duration: 300, curve: Easing.easeOut});
            $scope.opacityTrans.set([0], {duration: 300});
            $scope.$digest();
          } else {
            $scope.boxTransitionableHeader.set([0, 0, 0], {duration: 300, curve: Easing.easeIn});
            $scope.boxTransitionableFooter.set([0, 0, 0], {duration: 300, curve: Easing.easeIn});
            $scope.opacityTrans.set([1], {duration: 300});
            $scope.$digest();
          }
        });
    }, 1000);
  }]);
})();
