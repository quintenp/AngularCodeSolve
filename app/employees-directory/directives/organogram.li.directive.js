angular.module('app').directive('organogramLi', ['$window', '$rootScope', function($window, $rootScope) {
    'use strict';

    var organogramLiDirective = {
        restrict: 'EA',
        scope:{
            empobj  : '=',
            verticalnode: '='
        },
        templateUrl: 'app/employees-directory/views/templates/organogramLiTemplate.html',
    };

    return organogramLiDirective;
}]);
