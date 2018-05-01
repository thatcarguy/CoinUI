/**
 * http://usejsdoc.org/
 */

angular.module("cryptoApp").factory("cryptoSvcsFactory",
		["apiUrls","$q","$http",function(apiUrls, $q, $http){
		
			var appFactory = {};
			appFactory.loadCoinMarketCapAPI = function(data){
				return $http.get(apiUrls.COINMARKETCAP, data);
			};
			
			return appFactory;
	
}])