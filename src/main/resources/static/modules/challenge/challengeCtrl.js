angular.module('app')
    .controller('ChallengeCtrl', ['$scope', '$routeParams', 'Notification', function($scope, $routeParams, Notification){

    	$scope.challenge = {imageUrl:null, image:null};

    	$scope.success = function() {
	        Notification.success('Challenge creado exitosamente');
	        $scope.challenge = {imageUrl:null, image:null};
	        angular.element("input[type='file']").val(null);
	    };
}]);