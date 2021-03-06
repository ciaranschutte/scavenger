app.controller('MapController', ['$scope','leafletData', '$firebaseArray', 'ENV', function($scope,leafletData, $firebaseArray , ENV){
	
	var mapID = "raulduke.ne6nhdkl";
	var accessToken = ENV.MAPBOX_ACCESS_TOKEN;
	var app_id = ENV.FIREBASE_APP_ID;

	var ref = new Firebase("https://"+app_id+".firebaseio.com/tasks");
	var georef = new Firebase("https://"+app_id+".firebaseio.com/markers");
	$scope.tasks = $firebaseArray(ref);
	$scope.fmarkers = $firebaseArray(georef);
 	
	$scope.markers = [];
 	$scope.markerCount = 1;
	$scope.markerSelect = []; 

 	$scope.fmarkers.$loaded().then(function(fmarkers){
 		//console.log("markers",fmarkers);
 		fmarkers.forEach(function(m){
 			//console.log(m);
 			$scope.markers.push(m);
 			$scope.markerSelect.push({
 				value:m.$id, 
 				text:m.label.message
 			});
 		});

 	});

 	$scope.showMarkerSelect = function($index){
 		var key = $scope.tasks[$index].marker;
 		//console.log("key", key);
 		markerNum = $scope.fmarkers.$getRecord(key);
 		//console.log("markerNum", markerNum);
 		return markerNum.label.message;
 	};

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

	
	leafletData.getMap().then(function(map){
		map.setView([51.505, -0.09], 13);
	});



}]);