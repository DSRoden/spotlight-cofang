(function(){
  'use strict';
	angular.module('spotlightFilters', []).filter('dateToISO', function(){
		return function(input){
			return new Date(input);
		};
  });
})();
