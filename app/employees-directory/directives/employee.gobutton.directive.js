angular.module('app').directive('employeeGoButton', ['$location', '$rootScope', 'pathFactory', function($location, $rootScope, pathFactory) {
    'use strict';

    var sliderDirection = 'slider-left';
    var detailsTemplate = '<button class="btn btn-primary"><span class="badge" ng-bind="::reports"></span><span class="glyphicon glyphicon-chevron-right"></span></button>';
    var treeTemplate = '<button class="btn btn-primary"><span class="badge">Go</span><span class="glyphicon glyphicon-chevron-right"></span></button>';

    var getMatchingTemplate = function(element, attrs) {
        var linkType = attrs.linktype;

        switch (linkType) {
            case 'details': return detailsTemplate;
            case 'tree': return treeTemplate;
        }
    };

    var buttonNavigation = function(scope, element, attrs) {
        element.on('click', function() {
            var path = '';
            var linkType = attrs.linktype;

            switch (linkType) {
                case 'details':
                    path = pathFactory.getEmployeeDetailsPath(scope.empid);
                    break;
                case 'tree':
                    path = pathFactory.getEmployeeTreePath(scope.empid);
                    break;
            }
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
        template: getMatchingTemplate,
        link: buttonNavigation
    };

    return goButtonDirective;
}]);