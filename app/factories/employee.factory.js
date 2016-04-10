angular.module('app').factory('employeeFactory', ['employeesService',
    function(employeesService) {
        'use strict';

        var getAllEmployees = function() {
            return employeesService.getAllEmployees();
        };

        var findEmployeeById = function(employee) {
            var parsedEmployeeId = parseInt(employee.employeeId, 10);

            return employeesService.findById(parsedEmployeeId);
        };

        var findByManagerId = function(managerId) {
            var parsedManagerId = parseInt(managerId, 10);

            return employeesService.findByManager(parsedManagerId);
        };

        return {
            query: getAllEmployees,
            get: findEmployeeById,
            getReports: findByManagerId
        };
    }]);