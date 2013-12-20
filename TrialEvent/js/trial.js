var myApp = angular.module('TrialModule',[]);


myApp.controller('TrialCtrl', ['$scope', '$http', function($scope, $http){
	$scope.objs = [];
	$scope.test ="Hello World";
	
	

	
	{ //-------------------------------- EVENT
	$scope.events = [];

	$scope.loadevent = function () {
	
	}
	
	
	} //<-- EVENT
	
	
	{ //-------------------------------- Starter
	$scope.starter = [];

	$scope.loadstarter = function () {
		
	}
	
	
	} //<-- Starter
	
	
	{ //-------------------------------- Spuren
	$scope.starter = [];

	$scope.loadstarter = function () {
		
	}
	
	
	} //<-- Spuren
	
	
	{ //-------------------------------- IBN
	$scope.events = [];

	$scope.testfunk = function () {
		$http({method: 'GET', url: 'api/debug_request.php'}).
		  success(function(data, status, headers, config) {
			console.log(data);
		  }).
		  error(function(data, status, headers, config) {
			console.log("error");
		  });
	}
	
	$scope.testfunk();
	} //<-- IBN
	
	
}]);
	
