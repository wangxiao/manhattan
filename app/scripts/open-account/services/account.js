'use strict';

angular.module('manhattanApp')
.factory('wdAccount', function($rootScope, $http) {
    return {
        verifyPhone: function(num) {
            return $http.get('/verify', {
                params: {
                    phone: String(num)
                }
            });
        },
        register: function(opts) {
            return $http.post('/register', opts);
        },
        login: function(opts) {
            return $http.post('/login', opts);
        },
        logout: function() {
            return $http.get('/logout');
        },
        setInfo: function(opts) {
            return $http.post('/set_info', opts);
        }
    };
    // 结束 
});
