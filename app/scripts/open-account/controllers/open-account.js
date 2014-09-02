'use strict';

angular.module('manhattanApp')
    .controller('openAccountCtrl', function ($scope) {
        $scope.step = 1;
        route();
        $scope.personalFrom = false;
        $scope.realName = false;
        $scope.videoAuth = false;
        $scope.mailForm = false;

        function route() {
            switch ($scope.step) {
                case 1:
                    $scope.url = 'views/open-account/sign-in.html';
                break;
                case 2:
                    $scope.url = 'views/open-account/open-form.html';
                break;
            }
        }
        $scope.nextStep = function() {
            $scope.step ++;
            route();
        };
    });
