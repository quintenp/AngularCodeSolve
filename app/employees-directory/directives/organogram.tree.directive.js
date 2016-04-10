angular.module('app').directive('organogramTree', ['$window', '$rootScope', function($window, $rootScope) {
    'use strict';

    var organogramTreeDirective = {
        restrict: 'EA',
        scope:{
            empobj  : '='
        },
        templateUrl: 'app/employees-directory/views/templates/organogramTemplate.html',
    };

    return organogramTreeDirective;
}]);