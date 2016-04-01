angular.module('app', [
    'ngTouch',
    'ngRoute',
    'ngAnimate'
])
.config(['$routeProvider', function($routeProvider) {
        'use strict';
        var genericRT = {
            templateUrl: 'app/employees-directory/views/container.html',
            controller: 'EmployeeCtrl'
        }, detailRT = {
            templateUrl: 'app/employees-directory/views/employeeDetails.html',
            controller: 'EmployeeCtrl'
        }, reportRT = {
            templateUrl: 'app/employees-directory/views/employeeReport.html',
            controller: 'EmployeeCtrl'
        };

        $routeProvider.when('/employees', genericRT);
        $routeProvider.when('/employees/:employeeId', detailRT);
        $routeProvider.when('/employees/:employeeId/:reports', reportRT);
        $routeProvider.otherwise({ redirectTo: '/employees' });
    }]);
