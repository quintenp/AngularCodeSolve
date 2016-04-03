angular.module('app').directive('employeeGoLink', ['$location', '$rootScope', 'pathFactory', function($location, $rootScope, pathFactory) {
    'use strict';

    var sliderDirection = 'slider-left';
    var reportLinkTemplate = '<a href="" ng-bind="reports"></a>';
    var managerLinkTemplate = '<a href="" ng-bind="manager"></a>';

    var getMatchingTemplate = function(element, attrs) {
        var linkType = attrs.linktype;
        
        switch (linkType) {
            case 'report': return reportLinkTemplate;
            case 'manager': return managerLinkTemplate;
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
}]).directive('employeeGoButton', ['$location', '$rootScope', 'pathFactory', function($location, $rootScope, pathFactory) {
    'use strict';

    var sliderDirection = 'slider-left';
    var goButtonTemplate = '<button class="btn btn-primary"><span class="badge" ng-bind="reports"></span><span class="glyphicon glyphicon-chevron-right"></span></button>';

    var buttonNavigation = function(scope, element, attrs) {
        element.on('click', function() {
            var path = pathFactory.getEmployeeDetailsPath(scope.empid);

            scope.$apply(function() {
                $rootScope.slider = sliderDirection;
                $location.path(path);
            });
        });
    };

    var goButtonDirective = {
        restrict: 'E',
        scope: {
            empid: '=',
            reports: '='
        },
        template: goButtonTemplate,
        link: buttonNavigation
    };

    return goButtonDirective;
}]).directive('backButton', ['$window', '$rootScope', function($window, $rootScope) {
    'use strict';

    var sliderDirection = 'slider-right';
    var backButtonTemplate = '<button class="btn btn-primary"><span class="glyphicon glyphicon-chevron-left"></span></button>';

    var backButtonNavigation = function(scope, element, attrs) {
        element.on('click', function() {
            scope.$apply(function() {
                $rootScope.slider = sliderDirection;
                $window.history.back();
            });
        });
    };

    var backButtonDirective = {
        restrict: 'E',
        template: backButtonTemplate,
        link: backButtonNavigation
    };

    return backButtonDirective;
}]);
