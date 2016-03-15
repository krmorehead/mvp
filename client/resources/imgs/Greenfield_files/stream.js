angular.module('stream', [])
	.controller('StreamController', function ($scope, getVideo) {
		$scope.videoId = "";
		$scope.startTime = 120;
		$scope.messages = [];
		// [{user:"Bob", message: "hello"}]

		$scope.clearUrl = function(){
			$scope.url = ''
		}

		$scope.submitUrl = function(url){
			url = url.split("v=")
			//grabs the youtube video id
			$scope.videoId += url[1] 
			//pass in true since they are the host
			getVideo.setupPlayer($scope.videoId, true)			
			$scope.user = "Bob"
			$scope.messages = getVideo.messages;
		};

		$scope.joinStream = function(videoId){
			//pass in false since they are a viewer
			getVideo.setupPlayer(videoId, false)
			$scope.user = "Not Bob"
			$scope.messages = getVideo.messages;
		}

		$scope.submitMessage = function(keyCode){
			if(keyCode === 13){
				getVideo.submitMessage($scope.user, $scope.message)
				// ({user: $scope.user, message:$scope.message})
				$scope.message = ""
			}					
		}
	})