 /*jshint camelcase: false */
(function(){
  'use strict';

  angular.module('spotlight-famous')
  .controller('OnboardingCtrl', ['$scope', '$timeout', '$location', '$famous', '$timeline', '$state', 'ngDialog', function($scope , $timeout, $location, $famous, $timeline, $state, ngDialog){
    //animations and eventhandler inits
    var Transitionable = $famous['famous/transitions/Transitionable'];
        // Easing = $famous['famous/transitions/Easing'],
        // EventHandler = $famous['famous/core/EventHandler'];

    $scope.onboardingOpacity = new Transitionable(0);

     $scope.enter = function($done){
      console.log('entering onboarding');
      $scope.onboardingOpacity.set([1], {duration: 250}, $done);
    };

    $scope.leave = function($done){
      console.log('leaving onboarding');
      $scope.onboardingOpacity.set([0], {duration: 250}, $done);
    };


   $scope.title = 'onboarding winner';
   $scope.getPageWidth = function(){
      return window.innerWidth;
    };
    $scope.getPageHeight = function(){
      return window.innerHeight;
    };
  }]);
})();
