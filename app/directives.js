angular.module('app').directive('employeeGoLink', ['$location', '$rootScope', 'ROUTES', function($location, $rootScope, ROUTES) {
    'use strict';
    var goLinkDirective = {
        scope: {
            empid: '=',
            reports: '=',
            manager: '='
        },
        transclude: true,
        template: function(element, attrs) {
            if (attrs.linktype === 'report') {
                return '<a href=""  ng-bind="reports"></a>';
            }
            else if (attrs.linktype === 'manager') {
                return '<a href="" ng-bind="manager"></a>';
            }
        },
        link: function(scope, element, attrs) {
            element.on('click', function() {
                var path = '';

                if (attrs.linktype === 'report') {
                    path = ROUTES.EMPLOYEE.url + scope.empid + ROUTES.REPORT.url;
                }
                else if (attrs.linktype === 'manager') {
                    path = ROUTES.EMPLOYEE.url + scope.empid;
                }

                scope.$apply(function() {
                    $rootScope.slider = 'slider-left';
                    $location.path(path);
                });
            });
        }
    };

    return goLinkDirective;
}]).directive('employeeGoButton', ['$location', '$rootScope', 'ROUTES', function($location, $rootScope, ROUTES) {
    'use strict';

    var goButtonDirective = {
        scope: {
            empid: '=',
            reports: '='
        },
        transclude: true,
        template: '<button class="btn btn-primary"><span class="badge" ng-bind="reports"></span><span class="glyphicon glyphicon-chevron-right"></span></button>',
        link: function(scope, element, attrs) {
            element.on('click', function() {
                var path = ROUTES.EMPLOYEE.url + scope.empid;

                scope.$apply(function() {
                    $rootScope.slider = 'slider-left';
                    $location.path(path);
                });
            });
        }
    };

    return goButtonDirective;
}]).directive('backButton', ['$window', '$rootScope', function($window, $rootScope) {
    'use strict';
    var backButtonDirective= {
        template: '<button class="btn btn-primary"><span class="glyphicon glyphicon-chevron-left"></span></button>',
        link: function(scope, element, attrs) {
            element.on('click', function() {
                scope.$apply(function() {
                    $rootScope.slider = 'slider-right';
                    $window.history.back();
                });
            });
        }
    };
    
    return backButtonDirective;
}]);
