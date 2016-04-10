angular.module('app').controller('EmployeeOrganogramCtrl', ['$scope', '$routeParams', 'organogramFactory', 'loggingService',
    function($scope, $routeParams, organogramFactory, loggingService) {
        'use strict';

        loggingService.logOrganogram($routeParams.employeeId);

        $scope.rootEmployee = organogramFactory.query($routeParams.employeeId);
    }]);