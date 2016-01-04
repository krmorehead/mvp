angular.module("hiking-master",[
	"hiking-master.hiking-display",
	"hiking-master.root",
	"ngRoute"
	])
.config(function($routeProvider){
	$routeProvider

	.when("/", {
		controller: "RootController",
		templateUrl: "app/root/root.html"
	})

})