angular.module('app')
    .controller('LoginController', function ($scope) {
        $scope.login = {};
        $scope.login.login = function(){
        	console.log(this);
        }
    });