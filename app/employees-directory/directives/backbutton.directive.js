angular.module('app').directive('backButton', ['$window', '$rootScope', function($window, $rootScope) {
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