angular.module('app').directive('employeeGoLink', ['$location', '$rootScope', function($location, $rootScope) {
    return {
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
                var employeePath = '/employees/';
                var reporPath = '/reports';
                var path = '';

                if (attrs.linktype === 'report') {
                    path = employeePath + scope.empid + reporPath;
                }
                else if (attrs.linktype === 'manager') {
                    path = employeePath + scope.empid;
                }

                scope.$apply(function() {
                    $rootScope.slider = 'slider-left';
                    $location.path(path);
                });
            });
        }
    };
}]).directive('employeeGoButton', ['$location', '$rootScope', function($location, $rootScope) {
    return {
        scope: {
            empid: '=',
            reports: '='
        },
        transclude: true,
        template: '<button class="btn btn-primary"><span class="badge" ng-bind="reports"></span><span class="glyphicon glyphicon-chevron-right"></span></button>',
        link: function(scope, element, attrs) {
            element.on('click', function() {
                var employeePath = '/employees/';
                var path = '';
                
                path = employeePath + scope.empid;

                scope.$apply(function() {
                    $rootScope.slider = 'slider-left';
                    $location.path(path);
                });
            });
        }
    };
}]).directive('backButton', ['$window', '$rootScope', function($window, $rootScope) {
    return {
        template: '<button class="btn btn-primary"><span class="glyphicon glyphicon-chevron-left"></span></button>',
        link: function(scope, element, attrs) {
            element.on('click', function() {
                scope.$apply(function() {
                    $rootScope.slider = 'slider-right';
                    $window.history.back();
                });
            });
        }
    }
}]);
