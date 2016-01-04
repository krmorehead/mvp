angular.module('hikingApp.root', [])

.controller("RootController", function($scope, $http){
	$scope.hello = "hi"

	$scope.trailsRequest = function(){
		$http({
    url: "https://trailapi-trailapi.p.mashape.com/?limit=25&q[activities_activity_type_name_eq]=hiking&q[city_cont]=Pleasanton&q[country_cont]=United+States&q[state_cont]=California&radius=50", 
    method: "GET",
    headers: {
    	"X-Mashape-Key" : "NMB9t3uVj0mshOMSkYMjILuKeDfip1MD8uYjsnNCCRXwjeridh"
    },
 });
	}
})