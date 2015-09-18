app.controller('MapController', ['$scope','leafletData', '$firebaseArray', 'ENV', function($scope,leafletData, $firebaseArray , ENV){
	var mapID = "raulduke.ne6nhdkl";
	var accessToken = ENV.MAPBOX_ACCESS_TOKEN;
	var app_id = ENV.FIREBASE_APP_ID;
	var ref = new Firebase("https://"+app_id+".firebaseio.com/tasks");
	
	$scope.tasks = $firebaseArray(ref);
 	
 	$scope.markers = new Array();
 	$scope.markerCount = 1;

 	$scope.tasks.$loaded().then(function(tasks){
 		tasks.forEach(function(task) {
 			//console.log(task);

 			$scope.markers.push({
                lat: task.geo.lat,
                lng: task.geo.lng,
 				draggable: true,
 				focus: true,
                label: {
            	    message: ""+$scope.markerCount++,
                    options: {
                        noHide: true
                    }
                }
           	});
 		});
 	});

	$scope.$on('leafletDirectiveMarker.dragend', function(event, args){
		//console.log(args);

        $scope.markers[args.modelName].lat = args.model.lat;
        $scope.markers[args.modelName].lng = args.model.lng;
    });

	angular.extend($scope, {
	    	center: {
	    		lat: 53.39,
	    		lng: -6.19,
	    		zoom: 8
	    	},
			layers: {
                baselayers:{
                	mapbox: {
                		name: "Scavenger Map",
                        url: "https://a.tiles.mapbox.com/v4/"+mapID+"/{z}/{x}/{y}.png?access_token="+accessToken,
                        type: 'xyz',
                    },
	                overlay: {
	                       	
	                    name: 'overlay',
	                    type: 'group',
	                    visible: true,
	                    layerParams: {
	                        showOnSelector: false
                       	}
                    }
                }
            }
	});

/*
 
                $scope.taskpoints.push({
                	value:$scope.markerCount,
                	text:""+$scope.markerCount,
                });
            });
*/		
		leafletData.getMap().then(function(map){
			map.setView([51.505, -0.09], 13);
		})



}]);