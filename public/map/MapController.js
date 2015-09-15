app.controller('MapController', ['$scope','ENV', function($scope, ENV){
	var mapID = "raulduke.ne6nhdkl";
	var accessToken = ENV.MAPBOX_ACCESS_TOKEN;
	

	angular.extend($scope, {
	    defaults: {
	    	center: {
	    		lat: 53.39,
	    		lng: -6.19,
	    		zoom: 8
	    	},
	        tileLayer: "https://a.tiles.mapbox.com/v4/"+mapID+"/{z}/{x}/{y}.png?access_token="+accessToken,
	        path: {
	            weight: 10,
	            color: '#800000',
	            opacity: 1
	        }
		}
	});
}]);