'use strict';

angular.module('manhattanApp')
.factory('wdConfig', function($rootScope) {
    return {
        apiUrl: '/api/v1',
        httpTimeout: 10000
    };
    // 结束 
});
