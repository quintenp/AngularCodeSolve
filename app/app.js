angular.module('app', [
    'ngTouch',
    'ngRoute',
    'ngAnimate'
]).config(['$routeProvider','ROUTES',function($routeProvider,ROUTES) {
    'use strict';

    var genericRT = {
        templateUrl: 'app/employees-directory/views/employees.html',
        controller: 'EmployeeListCtrl',
    }, detailRT = {
        templateUrl: 'app/employees-directory/views/employeeDetails.html',
        controller: 'EmployeeDetailsCtrl'
    }, reportRT = {
        templateUrl: 'app/employees-directory/views/employeeReport.html',
        controller: 'EmployeeReportsCtrl'
    }, treeRT = {
        templateUrl: 'app/employees-directory/views/employeeTree.html',
        controller: 'EmployeeOrganogramCtrl'
    };

    $routeProvider
        .when(ROUTES.EMPLOYEE_DEFAULT.url, genericRT)
        .when(ROUTES.EMPLOYEE_DETAILS.url, detailRT)
        .when(ROUTES.EMPLOYEE_TREE.url, treeRT)
        .when(ROUTES.REPORT_LIST.url, reportRT)
        .otherwise({ redirectTo: ROUTES.EMPLOYEE_DEFAULT.url });
}]);
