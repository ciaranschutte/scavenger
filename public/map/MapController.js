app.controller('MapController', ['$scope','leafletData','ENV', function($scope, leafletData, ENV){
	var mapID = "raulduke.ne6nhdkl";
	var accessToken = ENV.MAPBOX_ACCESS_TOKEN;
	

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
                },


	});

	leafletData.getMap().then(function(map){

		map.setView([51.505, -0.09], 13);
		leafletData.getLayers().then(function(baselayers) {
			var drawnItems = new L.FeatureGroup();
			map.addLayer(drawnItems);

			// Initialise the draw control and pass it the FeatureGroup of editable layers
			var drawControl = new L.Control.Draw({
				draw: {
					rectangle: false,
					polyline: false,
					marker: false,
					polygon: false
				},
		
			});
			map.addControl(drawControl);
    	});
               

	});

}]);