'use strict';

angular.module('manhattanApp')
.controller('openAccountCtrl', function ($scope, wdAccount, $timeout) {
    $scope.step = 1;
    
    $scope.nextStep = function() {
        $scope.step ++;
        $scope.$emit('wd-show-step', {
            step: $scope.step
        });
    };
    $scope.prevStep = function() {
        $scope.step --;
        $scope.$emit('wd-show-step', {
            step: $scope.step
        });
    };
    // route();
    // // 正在验证手机
    // $scope.ui = {
    //     'checkingPhone': false,
    //     'personalFrom': true,
    //     'realName': false,
    //     'videoAuth': false,
    //     'mailForm': false,
    //     // 显示错误信息
    //     'error': '',
    //     // 视频见证，微信和 QQ 切换
    //     'videoSwitch': true
    // };

    // $scope.signIn = {
    //     phone: '',
    //     verify_code: '',
    //     password: ''
    // };
    // $scope.login = {
    //     phone: '',
    //     password: ''
    // };
    // $scope.person = {
    //     real_name: '',
    //     id_no: '',
    //     email: '',
    //     address: '',
    //     invite_phone: '',
    //     qq: ''
    // };



    // $scope.verifyPhone = function() {
    //     wdAccount.verifyPhone($scope.signIn.phone).then(function(data) {
    //         console.log(data);
    //     }, function(data) {
    //         console.log(data);
    //     });
    // };

    // $scope.register = function() {
    //     wdAccount.register($scope.signIn).then(function(data) {
    //         console.log(data);
    //         $scope.nextStep();
    //     }, function(data) {
    //         console.log(data);
    //     });
    // };

    // $scope.loginFun = function() {
    //     wdAccount.login($scope.login).then(function(data) {
    //         console.log(data);
    //         $scope.nextStep();
    //     }, function(data) {
    //         console.log(data);
    //     });
    // };



});
