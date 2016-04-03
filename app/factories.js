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

        return {
            query: getAllEmployees,
            get: findEmployeeById
        };
    }]).factory('reportFactory', ['employeesService',
        function(employeesService) {
            'use strict';

            var findEmpByManagerId = function(employee) {
                var parsedManagerId = parseInt(employee.employeeId, 10);

                return employeesService.findByManager(parsedManagerId);
            };

            return {
                query: findEmpByManagerId
            };
        }]).factory('pathFactory', ['ROUTES', function(ROUTES) {
            'use strict';

            var employeeDetailsPath = function(empId) {
                return ROUTES.EMPLOYEE_DETAILS.url.replace(':employeeId', empId);
            };

            var employeeReportsPath = function(empId) {
                return ROUTES.EMPLOYEE_DETAILS.url.replace(':employeeId', empId) + ROUTES.REPORT_DEFAULT.url;
            };

            return {
                getEmployeeDetailsPath: employeeDetailsPath,
                getEmployeeReportsPath: employeeReportsPath
            }
        }]);