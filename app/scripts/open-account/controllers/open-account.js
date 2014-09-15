'use strict';

angular.module('manhattanApp')
.controller('openAccountCtrl', function ($scope, wdAccount, $timeout, wdConfig, wdStorage) {
    $scope.step = 1;
    // 完成了哪一部开户填表
    $scope.finishStep = wdStorage.item('open-account-finish-step') || 1;
    $scope.uploadUrl = wdConfig.apiUrl + '/upload';
    $scope.signIn = {
        phone: '',
        verify_code: '',
        password: '',
        uiPhoneError: '',
        uiVerifyCodeError: '',
        uiPasswordError: ''
    };

    $scope.login = {
        phone: '',
        password: ''
    };

    $scope.person = {
        real_name: '',
        id_no: '',
        email: '',
        address: '',
        invite_phone: '',
        qq: '',
        uiRealNameError: '',
        uiIdNoError: '',
        uiEmailError: '',
        uiAddressError: '',
        uiInvitePhoneError: '',
        uiQQError: ''
    };
    
    function checkPhone() {
        if (!$scope.signIn.phone) {
            $scope.signIn.uiPhoneError = '手机号不能为空';
            return false;
        } else {
            $scope.signIn.uiPhoneError = '';
            return true;
        }
    }

    function checkVerifyCode() {
        if (!$scope.signIn.verify_code) {
            $scope.signIn.uiVerifyCodeError = '验证码不能为空';
            return false;
        } else {
            $scope.signIn.uiVerifyCodeError = '';
            return true;
        }
    }

    function checkPassword() {
        if (!$scope.signIn.password) {
            $scope.signIn.uiPasswordError = '密码不能为空';
            return false;
        } else {
            $scope.signIn.uiPasswordError = '';
            return true;
        }
    }

    $scope.verifyPhone = function() {
        wdAccount.verifyPhone($scope.signIn.phone).then(function(data) {
            console.log(data);
        }, function(data) {
            console.log(data);
        });
    };

    $scope.register = function() {
        wdAccount.register($scope.signIn).then(function(data) {
            console.log(data);
        }, function(data) {
            console.log(data);
        });
    };

    function checkRealName() {
        if (!$scope.person.real_name) {
            $scope.person.uiRealNameError = '真实姓名不能为空';
            return false;
        } else {
            $scope.person.uiRealNameError = '';
            return true;
        }
    }

    function checkIdNo() {
        if (!$scope.person.id_no) {
            $scope.person.uiIdNoError = '请填写身份证号码';
            return false;
        } else {
            $scope.person.uiIdNoError = '';
            return true;
        }
    }

    function checkEmail() {
        if (!$scope.person.email) {
            $scope.person.uiEmailError = '请填写电子邮件地址';
            return false;
        } else {
            $scope.person.uiEmailError = '';
            return true;
        }
    }

    function checkQQ() {
        if (!$scope.person.qq) {
            $scope.person.uiQQError = '请填写 QQ 号码';
            return false;
        } else {
            $scope.person.uiQQError = '';
            return true;
        }
    }

    $scope.loginFun = function() {
        wdAccount.login($scope.login).then(function(data) {
            console.log(data);
        }, function(data) {
            console.log(data);
        });
    };

    $scope.nextStep = function() {
        switch ($scope.step) {
            case 1:
                if (checkPhone()) {
                    $scope.verifyPhone();
                    nextStep();
                } else {
                    return false;
                }
            break;
            case 2:
                if (checkVerifyCode() && checkPassword()) {
                    $scope.register();
                    nextStep();
                } else {
                    return false;
                }
            break;
            case 5:
                if (checkRealName() && checkIdNo() && checkEmail()) {
                    $scope.finishStep = 2;
                    nextStep();
                } else {
                    return false;
                }
            break;
            case 7:
                $scope.$emit('wd-upload-form-submit');
                // $scope.$on('wd-upload-form-success', function() {
                    nextStep();
                    $scope.finishStep = 3;
                // });
            break;
            default:
                nextStep();
            break;
        }
    };

    $scope.goToStep = function(step) {
        $scope.step = step;
        $scope.$emit('wd-show-step', {
            step: $scope.step
        });
    };

    function nextStep() {
        $scope.step ++;
        $scope.goToStep($scope.step);
    }

    $scope.prevStep = function() {
        $scope.step = 4;
        $scope.$emit('wd-show-step', {
            step: $scope.step
        });
    };

    $scope.keyDown = function(e) {
        if (e.keyCode === 13) {
            $scope.nextStep();
        }
    };

    function changeFinishStep(step) {
        $scope.finishStep = step;
        wdStorage.item('open-account-finish-step', step);
    }
});
