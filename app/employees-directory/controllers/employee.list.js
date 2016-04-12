angular.module('app').controller('EmployeeListCtrl', ['$scope', '$routeParams', 'employeeFactory', 'loggingService',
    function($scope, $routeParams, employeeFactory, loggingService) {
        'use strict';

        function initialize() {
            loggingService.logList();

            $scope.employees = employeeFactory.query();
        }

        initialize();
    }]);