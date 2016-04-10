angular.module('app').directive('employeeGoLink', ['$location', '$rootScope', 'pathFactory', function($location, $rootScope, pathFactory) {
    'use strict';

    var sliderDirection = 'slider-left';
    var reportLinkTemplate = '<a href="" ng-bind="::reports"></a>';
    var managerLinkTemplate = '<a href="" ng-bind="::manager"></a>';

    var getMatchingTemplate = function(element, attrs) {
        var linkType = attrs.linktype;

        switch (linkType) {
            case 'report': return reportLinkTemplate;
            case 'manager': return managerLinkTemplate;
            case 'details': return managerLinkTemplate;
        }
    };

    var linkNavigation = function(scope, element, attrs) {
        element.on('click', function() {
            var path = '';
            var linkType = attrs.linktype;

            switch (linkType) {
                case 'report':
                    path = pathFactory.getEmployeeReportsPath(scope.empid);
                    break;
                case 'manager':
                    path = pathFactory.getEmployeeDetailsPath(scope.empid);
                    break;
                case 'details':
                    path = pathFactory.getEmployeeDetailsPath(scope.empid);
                    break;
            }

            scope.$apply(function() {
                $rootScope.slider = sliderDirection;
                $location.path(path);
            });
        });
    };

    var goLinkDirective = {
        restrict: 'E',
        scope: {
            empid: '=',
            reports: '=',
            manager: '='
        },
        template: getMatchingTemplate,
        link: linkNavigation
    };

    return goLinkDirective;
}]);