angular.module('app').directive('employeeTemplate', ['$location', '$rootScope', 'pathFactory', function($location, $rootScope, pathFactory) {
    'use strict';

    var employeeTemplateDirective = {
        restrict: 'E',
        transclude: true,
        scope:{
            emp: '=',
            pagetitle: '@',
            backbutton: '@'
        },
        templateUrl: 'app/employees-directory/views/templates/employeeTemplate.html',
    };

    return employeeTemplateDirective;
}]);
