(function(ng) {
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

    ng.module('app').constant('ROUTES', ROUTES);
    
}(angular));
