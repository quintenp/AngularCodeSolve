angular.module('app').controller('EmployeeReportsCtrl', ['$scope', '$routeParams', 'reportFactory', 'loggingService',
    function($scope, $routeParams, reportFactory, loggingService) {
        'use strict';

        loggingService.logReports($routeParams.employeeId);

        $scope.employees = reportFactory.query({ employeeId: $routeParams.employeeId });
    }]);