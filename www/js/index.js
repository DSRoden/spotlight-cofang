/* global FastClick */

(function(){
  'use strict';

  angular.module('spotlight-famous', ['ui.router', 'famous.angular', 'spotlightFilters', 'ngDialog'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider, $state){
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',     {url:'/',         templateUrl:'templates/home.html', controller:'HomeCtrl'})
    .state('archive',     {url:'/',         templateUrl:'templates/archive.html', controller:'ArchiveCtrl'});
  }])
  .run(function(){
    FastClick.attach(document.body);
  });
})();
