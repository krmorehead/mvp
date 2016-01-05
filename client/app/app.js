angular.module("hikingApp",[
	"hikingApp.hiking-display",
	"hikingApp.root",
	"ngRoute"
	])

.config(function($routeProvider){
	$routeProvider
		.when("/", {
			templateUrl: "app/root/root.html",
			controller: "RootController",
		})
})

