var app = angular.module('ScavengerApp', ['ngRoute', 'leaflet-directive', 'firebase', 'xeditable', 'config']);

app.config(function($routeProvider){

	$routeProvider
	  .when('/', {
	  	controller: 'HomeController',
	  	templateUrl: 'home/home.html'
	  })
	  .when('/event', {
	  	controller: 'EventController',
	  	templateUrl: 'event/event.html'
	  })
	  .when('/map', {
	  	controller: 'MapController',
	  	templateUrl: 'map/map.html'
	  })
	  .when('/tasks', {
	  	controller: 'TasksController',
	  	templateUrl: 'task/tasks.html'
	  })
	  .when('/teams', {
	  	controller: 'TeamsController',
	  	templateUrl: 'team/teams.html'
	  })
	  .otherwise('/')


});

