/* global FastClick */

(function(){
  'use strict';

  angular.module('spotlight-famous', ['ui.router', 'famous.angular', 'spotlightFilters'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider, $state){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',     {url:'/',         templateUrl:'templates/home.html', controller:'HomeCtrl'});
  }])
  .run(function(){
    FastClick.attach(document.body);
  });
})();
