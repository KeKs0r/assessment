angular.module('Js-Users-App').controller('NewUserCtrl', NewUserCtrl);


function NewUserCtrl($route, $scope, userDataFactory){
	$scope.user_created = false;
	$scope.response_message = "";

	$scope.submitNewUser = function () {

		if($scope.first_name && $scope.last_name){
			var postData = {
	            first_name: $scope.first_name,
	            last_name: $scope.last_name,
	            status: "active"
	        };

	        userDataFactory.newUser(postData).then(function(response) {
	            if (response.status === 201) {
	            	$scope.first_name = "";
	            	$scope.last_name = "";
	                $scope.response_message = "User created";
	            }
	        }).catch(function(error) {
	            console.log(error);
	        });
		} else if($scope.first_name && !$scope.last_name){
			$scope.response_message = "The last name should be specified";
		} else if(!$scope.first_name && $scope.last_name){
			$scope.response_message = "The first name should be specified";
		}
	    
	}
}