angular.module('app')
    .factory('Employee', ['employeesService',
        function(employeesService) {
            'use strict';
            
            return {
                query: function() {
                    return employeesService.getAllEmployees();
                },
                get: function(employee) {
                    return employeesService.findById(parseInt(employee.employeeId));
                }
            }

        }])
    .factory('Report', ['employeesService',
        function(employeesService) {
            'use strict';
            
            return {
                query: function(employee) {
                    return employeesService.findByManager(parseInt(employee.employeeId));
                }
            }
        }]);