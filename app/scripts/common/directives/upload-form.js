'use strict';

angular.module('manhattanApp')
.directive('wdUploadForm', function($window, wdConfig) {
return {
    restrict: 'A',
    scope: false,
    replace: true,
    controller: ['$scope', 
    function($scope) {
    }],
    link: function($scope, $element, $attrs, $controller) {
        
        // 初始化Web Uploader
        var uploader = $window.WebUploader.create({

            // 选完文件后，是否自动上传。
            auto: true,

            // swf文件路径
            // swf: BASE_URL + '/js/Uploader.swf',

            // 文件接收服务端。
            server: wdConfig.apiUrl + '/upload',

            // 选择文件的按钮。可选。
            // 内部根据当前运行是创建，可能是input元素，也可能是flash.
            pick: $element[0],

            // 只允许选择图片文件。
            accept: {
                title: 'Images',
                extensions: 'gif,jpg,jpeg,bmp,png',
                mimeTypes: 'image/*'
            },

            formData: {
                face: 'front'
            }
        });

        // $element.attr('enctype', 'multipart/form-data');
        // var input = $element.find('input[type=file]');

        // $scope.$on('wd-upload-form-submit', function() {
        //     var val = input.eq(0).val();
        //     if (val) {
        //         input.removeClass('error');
        //         $element.submit();
        //         $scope.$emit('wd-upload-form-success');
        //     } else {
        //         input.addClass('error');
        //         $scope.$emit('wd-upload-form-empty');
        //     }
        // });
    }
};
});
