'use strict';

angular.module('manhattanApp')
.directive('wdShowStep', function() {
return {
    restrict: 'A',
    scope: false,
    replace: false,
    controller: ['$scope', 
    function($scope) {
    }],
    link: function($scope, $element, $attrs, $controller) {
        var speed = 1.2;
        var step = Number($attrs.step);
        var height = $element.outerHeight() + 100;
        
        $scope.$on('wd-show-step', function(e, data) {
            if (data.step > step) {
                $element.animate({
                    top: -height
                }, height/speed, 'linear');
            } else {
                $element.animate({
                    top: 0
                }, height/speed, 'linear');                
            }
        });
    }
};
});
