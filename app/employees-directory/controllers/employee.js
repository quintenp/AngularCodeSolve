angular.module('app').controller('EmployeeCtrl', ['$scope', '$routeParams', 'employeeFactory', 'reportFactory',
    function($scope, $routeParams, employeeFactory, reportFactory) {
        'use strict';

        if (!$routeParams.employeeId) {
            console.info('Visited list of employees');
            $scope.employees = employeeFactory.query();
        } else if ($routeParams.employeeId && !$routeParams.reports) {
            console.info('Visited details of employeeId: ' + $routeParams.employeeId);
            $scope.employee = employeeFactory.get({ employeeId: $routeParams.employeeId });
        } else {
            console.info('Visited reports of employeeId: ' + $routeParams.employeeId);
            $scope.employees = reportFactory.query({ employeeId: $routeParams.employeeId });
        }
    }]);