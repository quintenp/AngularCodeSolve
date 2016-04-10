angular.module('app').factory('organogramFactory', ['employeesService',
    function(employeesService) {
        'use strict';

        var getOrganogramDataById = function(empId) {
            var parsedParentId = parseInt(empId, 10);

            return employeesService.getEmployeeEntity(parsedParentId);
        };

        return {
            query: getOrganogramDataById
        };
    }]);