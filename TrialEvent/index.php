<!doctype html>
<html ng-app="TrialModule">
  <head>
	<script src="js/angular.min.js"></script>
	<script src="js/trial.js"></script>
   
  </head>
<body>

<div ng-controller="TrialCtrl">	

<a href="" data-ng-click="testfunk()">Testfunk</a>

{{test}}

TEST LOCAL

<ul data-ng-repeat="s in starter">
	<li>{{s.nachname}} {{s.vorname}}</li>
</ul>
	

</div>

</body>
</html>
