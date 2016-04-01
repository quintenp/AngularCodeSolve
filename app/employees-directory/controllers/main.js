angular.module('app')
    .controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location',
        function($scope, $rootScope, $window, $location) {
            $scope.slider = '';
            $rootScope.back = function() {
                $scope.slider = 'slider-right';
                $window.history.back();
            }
            $rootScope.go = function(path) {
                $scope.slider = 'slider-left';
            }
        }]);