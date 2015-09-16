app.controller('TeamsController', ['$scope', '$firebaseObject','ENV', function($scope, $firebaseObject, ENV){
	var app_id = ENV.FIREBASE_APP_ID;
	var ref = new Firebase("https://"+app_id+".firebaseio.com/teams");
  	// download the data into a local object
  	$scope.teams = $firebaseObject(ref);

}]);