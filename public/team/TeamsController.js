app.controller('TeamsController', ['$scope', '$firebaseObject','config', function($scope, $firebaseObject, config){
	var app_id = config.FIREBASE_APP_ID;
	var ref = new Firebase("https://"+app_id+".firebaseio.com/teams");
  	// download the data into a local object
  	$scope.teams = $firebaseObject(ref);

}]);