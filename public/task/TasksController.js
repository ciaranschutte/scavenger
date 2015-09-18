app.controller('TasksController', ['$scope', '$firebaseArray', 'ENV', function($scope, $firebaseArray, ENV){
	
	var app_id = ENV.FIREBASE_APP_ID;
	var ref = new Firebase("https://"+app_id+".firebaseio.com/tasks");
	var georef = new Firebase("https://"+app_id+".firebaseio.com/markers");
	
	$scope.tasks = $firebaseArray(ref);
	$scope.markers = $firebaseArray(georef);

	$scope.save = function(task) {

		$scope.markers.$add({
			lat:51.505,
			lng:-0.09,
			draggable: true,
	 		focus: true,
	        label: {
	        	message: "1",
	            options: {
	        	    noHide: true
	            }
		    }
		})
		.then(function(ref){
			$scope.tasks.$add({
				detail: task.detail,
				attachments: task.attachments,
				marker: ref.key(),
			});
		});

		

		
	}
}]);