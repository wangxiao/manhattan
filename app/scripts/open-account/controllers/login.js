'use strict';

angular.module('manhattanApp')
.controller('loginCtrl', function ($scope, wdAccount, $timeout) {

    $scope.login = {
        phone: '',
        password: ''
    };

    $scope.loginFun = function() {
        wdAccount.login($scope.login).then(function(data) {
            console.log(data);
        }, function(data) {
            console.log(data);
        });
    };

});
