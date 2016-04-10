angular.module('app').factory('pathFactory', ['ROUTES', function(ROUTES) {
    'use strict';

    var employeeDetailsPath = function(empId) {
        return ROUTES.EMPLOYEE_DETAILS.url.replace(':employeeId', empId);
    };

    var employeeReportsPath = function(empId) {
        return ROUTES.EMPLOYEE_DETAILS.url.replace(':employeeId', empId) + ROUTES.REPORT_DEFAULT.url;
    };

    var employeeTreePath = function(empId) {
        return ROUTES.EMPLOYEE_TREE.url.replace(':employeeId', empId);
    };

    return {
        getEmployeeDetailsPath: employeeDetailsPath,
        getEmployeeReportsPath: employeeReportsPath,
        getEmployeeTreePath: employeeTreePath
    }
}]);