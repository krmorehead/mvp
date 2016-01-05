angular.module('hikingApp.root', [])

.controller("RootController", function($scope, $http){

	$scope.keyPress = function(keyCode){
		if(keyCode === 13){
			$scope.trailsRequest()
		}
	}
	

	$scope.buildMap = function(latitude, longitude, domElement){

	}

	$scope.trailsRequest = function(){
		console.log("starting request")
		var query = "https://trailapi-trailapi.p.mashape.com/?" + "limit=25" + "&q" 
    if($scope.activity){
    	query += "[activities_activity_type_name_eq]=" + $scope.activity + "&q"
    }
    query += "[city_cont]=" + $scope.city + "&q" + "[country_cont]=" + $scope.country + "&q"+ "[state_cont]=" + $scope.state + "&" + "radius=" + $scope.milesRadius, 

		$http({
    method: "GET",
    url: query,
    headers: {
    	"X-Mashape-Key" : "NMB9t3uVj0mshOMSkYMjILuKeDfip1MD8uYjsnNCCRXwjeridh"
    }})
    .success(function(data){
 			console.log("request complete")
 			console.log(data)
 			if(data.places.length){
 				$scope.trails = data.places
 			} else {
 				$scope.trails = [{name : "No Activities found", description: " "}]
 			}
  	})
	}
})
// var mapCanvas = document.getElementById('map');
// var mapOptions = {
//       center: new google.maps.LatLng(44.5403, -78.5463),
//       zoom: 8,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     }
// var map = new google.maps.Map(mapCanvas, mapOptions);
