/**
 * http://usejsdoc.org/
 */
var cryptoApp = angular.module('cryptoApp',['ui.bootstrap','ngRoute']);

cryptoApp.controller('cryptoController',['cryptoSvcsFactory', '$scope', '$http',function(cryptoSvcsFactory, $scope, $http){
	
	
	$scope.refresh = function(){
		
	}
	
	
}]);