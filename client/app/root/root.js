angular.module('hikingApp.root', [])

.controller("RootController", function($scope, $http){
	$scope.hello = "hi"


	$scope.trailsRequest = function(){
		console.log("starting request")
		console.log($scope.activity)
		var query = "https://trailapi-trailapi.p.mashape.com/?" +
    "limit=25" + "&q" 
    if($scope.activity){
    	query += "[activities_activity_type_name_eq]=" + $scope.activity + "&q"
    }
    query += "[city_cont]=" + $scope.city + "&q" +
    "[country_cont]=" + $scope.country + "&q"+
    "[state_cont]=" + $scope.state + "&" +
    "radius=" + $scope.milesRadius, 


		$http({
    method: "GET",
    url: query,
    headers: {
    	"X-Mashape-Key" : "NMB9t3uVj0mshOMSkYMjILuKeDfip1MD8uYjsnNCCRXwjeridh"
    },
    params: {

    }
 		}).success(function(data){
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

//?limit=25&q[activities_activity_type_name_eq]=hiking&q[city_cont]=Pleasanton&q[country_cont]=United+States&q[state_cont]=California&radius=50