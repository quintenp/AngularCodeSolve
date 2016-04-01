angular.module('app').directive('employeeLink', ['$location', '$rootScope', function($location, $rootScope) {
    return {
        scope: {
            empid: '=',
            reports: '=',
            manager: '='
        },
        transclude: true,
        template: function(element, attrs) {
            var type = attrs.type || 'text';
            var hasLinkType = attrs.hasOwnProperty('linktype');
            var linktype = attrs.linktype;

            if (linktype === 'report') {
                return '<a href=""  ng-bind="reports"></a>';
            }
            else if (linktype === 'details') {
                return '<button class="btn btn-primary"><span class="badge">{{reports}}</span><span class="glyphicon glyphicon-chevron-right"></span></button>';
            }
            else if (linktype === 'manager') {
                return '<a href="">{{manager}}</a>';
            }
        },
        link: function(scope, element, attrs) {
            element.on('click', function() {
                var type = attrs.type || 'text';
                var hasLinkType = attrs.hasOwnProperty('linktype');
                var linktype = attrs.linktype;

                if (linktype === 'report') {
                    $rootScope.go('/employees/' + scope.empid + '/reports');
                    $location.url('/employees/' + scope.empid + '/reports');
                    scope.$apply();
                }
                else if (linktype === 'details' || linktype === 'manager') {
                    $rootScope.go('/employees/' + scope.empid);
                    $location.url('/employees/' + scope.empid);
                    scope.$apply();
                }
            });
        }

    };
}]);
