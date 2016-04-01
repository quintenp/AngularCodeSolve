angular.module('app')
    .controller('EmployeeCtrl', ['$scope', '$routeParams', 'Employee', 'Report',
        function($scope, $routeParams, Employee, Report) {
             'use strict';
             
            if (!$routeParams.employeeId) {
                console.info('Visited list of employees');
                $scope.employees = Employee.query();
            } else if ($routeParams.employeeId && !$routeParams.reports) {
                console.info('Visited details of employeeId: ' + $routeParams.employeeId);
                $scope.employee = Employee.get({ employeeId: $routeParams.employeeId });
            } else {
                console.info('Visited reports of employeeId: ' + $routeParams.employeeId);
                $scope.employees = Report.query({ employeeId: $routeParams.employeeId });
            }
        }]);