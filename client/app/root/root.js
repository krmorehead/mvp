angular.module('hikingApp.root', [])

.controller("RootController", function($scope, $http){
	$scope.hello = "hi"


	$scope.trailsRequest = function(){
		console.log("starting request")

		$http({
    method: "GET",
    url: "https://trailapi-trailapi.p.mashape.com/?" +
    "limit=25" + "&q" +
    "[activities_activity_type_name_eq]=hiking" + "&q"+
    "[city_cont]=" + $scope.city + "&q" +
    "[country_cont]=" + $scope.country + "&q"+
    "[state_cont]=" + $scope.state + "&" +
    "radius=" + $scope.milesRadius, 
    headers: {
    	"X-Mashape-Key" : "NMB9t3uVj0mshOMSkYMjILuKeDfip1MD8uYjsnNCCRXwjeridh"
    },
    params: {

    }
 		}).success(function(data){
 			console.log("request complete")
 			console.log(data)
			$scope.trails = data.places
  	})
	}

	var displayTrails = function(data){
		console.log(data)
	}
})

//?limit=25&q[activities_activity_type_name_eq]=hiking&q[city_cont]=Pleasanton&q[country_cont]=United+States&q[state_cont]=California&radius=50