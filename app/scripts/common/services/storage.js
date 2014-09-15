'use strict';

angular.module('manhattanApp')
.factory('wdStorage', function($window) {
    function get(name) {
        return $window.localStorage.getItem(name);
    }

    function set(name, value) {
        return $window.localStorage.setItem(name, value);
    }

    return {
        item: function(name, value) {
            switch (arguments.length) {
                case 1:
                return get(name);
                case 2:
                return set(name, value);
            }
        }
    };
    // 结束 
});
