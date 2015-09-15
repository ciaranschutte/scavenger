app.controller('TasksController', ['$scope', '$firebaseArray', 'ENV' function($scope, $firebaseArray, ENV){
	var app_id = ENV.FIREBASE_APP_ID;
	var ref = new Firebase("https://"+app_id+".com/tasks");
	
	$scope.tasks = $firebaseArray(ref);

	$scope.save = function(task) {
		$scope.tasks.$add({
			order: task.order,
			detail: task.detail,
			geo_pos: task.geo_pos,
			attachments: task.attachments
		});
	}
}]);