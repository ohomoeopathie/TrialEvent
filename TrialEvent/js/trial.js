var myApp = angular.module('TrialModule',[]);

//TEST auf DEV SERVER


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
	
	
	{ //-------------------------------- Testing
	
	$scope.starter = [
		{'sid': '1',	'nachname' : 'Mayer',		'vorname' : 'Franz'},
		{'sid': '2',	'nachname' : 'Schmid',		'vorname' : 'Joe'},
		{'sid': '3',	'nachname' : 'Müller',		'vorname' : ''},
		{'sid': '4',	'nachname' : 'Huber',		'vorname' : 'Sepp'},
		{'sid': '5',	'nachname' : 'Mustermann',	'vorname' : 'Max'}
	];
	
	
	
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
	
