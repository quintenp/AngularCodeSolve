(function() {
    "use strict";
    
    var ROUTES = {
        'EMPLOYEE': {
            name: "employee",
            url: '/employees/'
        },
        'REPORT': {
            name: "report",
            url: '/report'
        }
    };

    angular.module('app').constant('ROUTES', ROUTES);
    
}());
