angular.module('hikingApp.root', [])

.controller("RootController", function($scope, $http){

	$scope.keyPress = function(keyCode){
		if(keyCode === 13){
			$scope.trailsRequest()
		}
	}

	$scope.trailsRequest = function(){
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
 			$scope.trails = data.places || [{name : "No Activities found", description: " "}]
  	})
	}
})
