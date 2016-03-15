angular.module("hikingApp",[
	"hikingApp.root",
	"ngRoute",
	"ngMap"
	])

.config(function($routeProvider){
	$routeProvider
		.when("/", {
			templateUrl: "app/root/root.html",
			controller: "RootController",
		})
})

