angular.module('app').factory('reportFactory', ['employeesService',
    function(employeesService) {
        'use strict';

        var findEmpByManagerId = function(employee) {
            var parsedManagerId = parseInt(employee.employeeId, 10);

            return employeesService.findByManager(parsedManagerId);
        };

        return {
            query: findEmpByManagerId
        };
    }]);