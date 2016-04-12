(function() {
    "use strict";

    var ROUTES = {
        'EMPLOYEE_DEFAULT': {
            name: "employees",
            url: '/employees'
        },
        'EMPLOYEE_DETAILS': {
            name: "employeeDetails",
            url: '/employees/:employeeId'
        },
        'EMPLOYEE_TREE': {
            name: "employeeTree",
            url: '/employees/tree/:employeeId'
        },
        'REPORT_DEFAULT': {
            name: "report",
            url: '/reports'
        },
        'REPORT_LIST': {
            name: "reportList",
            url: '/employees/:employeeId/:reports'
        }
    };

    angular.module('app').constant('ROUTES', ROUTES);
} ());
