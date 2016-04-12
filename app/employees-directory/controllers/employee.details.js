angular.module('app').controller('EmployeeDetailsCtrl', ['$scope', '$routeParams', 'employeeFactory', 'loggingService',
    function($scope, $routeParams, employeeFactory, loggingService) {
        'use strict';

        function initialize() {
            loggingService.logDetails($routeParams.employeeId);

            $scope.employee = employeeFactory.get({ employeeId: $routeParams.employeeId });
        }

        initialize();
    }]);