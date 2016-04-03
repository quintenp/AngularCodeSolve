angular.module('app', [
    'ngTouch',
    'ngRoute',
    'ngAnimate'
]).config(['$routeProvider','ROUTES',function($routeProvider,ROUTES) {
    'use strict';

    var genericRT = {
        templateUrl: 'app/employees-directory/views/employees.html',
        controller: 'EmployeeCtrl',
    }, detailRT = {
        templateUrl: 'app/employees-directory/views/employeeDetails.html',
        controller: 'EmployeeCtrl'
    }, reportRT = {
        templateUrl: 'app/employees-directory/views/employeeReport.html',
        controller: 'EmployeeCtrl'
    };

    $routeProvider
        .when(ROUTES.EMPLOYEE_DEFAULT.url, genericRT)
        .when(ROUTES.EMPLOYEE_DETAILS.url, detailRT)
        .when(ROUTES.REPORT_LIST.url, reportRT)
        .otherwise({ redirectTo: ROUTES.EMPLOYEE_DEFAULT.url });
}]);
