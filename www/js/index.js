(function(){
  'use strict';

  angular.module('spotlight-famous', ['ui.router', 'famous.angular'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider, $state){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',     {url:'/',         templateUrl:'templates/home.html', controller:'HomeCtrl'});
  }])
  .filter('dateToISO', function(){
  return function(input){
    return new Date(input).toISOString();
  };
});
})();
