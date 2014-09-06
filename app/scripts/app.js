'use strict';

/**
 * @ngdoc overview
 * @name manhattanApp
 * @description
 * # manhattanApp
 *
 * Main module of the application.
 */
angular
.module('manhattanApp', 
['ngCookies', 'ngResource', 'ngRoute', 'ngSanitize'])
.config(function ($routeProvider, $httpProvider) {
$routeProvider
    .when('/', {
        templateUrl: '../views/open-account/index.html',
        controller: 'openAccountCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });

    // 全局 $http 请求配置。
    $httpProvider.interceptors.push(function(wdConfig, $location) {
        return {
            'request': function(config) {
                config.timeout = wdConfig.httpTimeout;
                if (!/^[http|https]/.test(config.url) && !/\.html$/.test(config.url)) {
                    config.url = wdConfig.apiUrl + config.url;
                }
                return config;
            },
            'response': function(response) {
                if (/<div>/.test(response.data)) {
                    return response.data;
                } else {
                    return response;
                }          
            },
            'responseError': function(response) {
                // if (response.status === 403 || response.status === 404) {
                    // $location.path('/auth');
                // }
                return response;
            }
        };
    });
});
