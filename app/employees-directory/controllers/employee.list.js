angular.module('app').controller('EmployeeListCtrl', ['$scope', '$routeParams', 'employeeFactory', 'loggingService',
    function($scope, $routeParams, employeeFactory, loggingService) {
        'use strict';

        loggingService.logList();

        $scope.employees = employeeFactory.query();

    }]);