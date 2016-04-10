angular.module('app').service('loggingService', function() {
    'use strict';


    function logUserDetailsAction(empId) {
        console.info('Visited details of employeeId: ' + empId);
    }

    function logUserListAction() {
        console.info('Visited list of employees');
    }

    function logUserReportsAction(empId) {
          console.info('Visited reports of employeeId: ' + empId);
    }

    function logUserOrganogramAction(empId) {
        console.info('Visited organogram of employeeId: ' + empId);
    }



    return {
        logDetails: logUserDetailsAction,
        logList: logUserListAction,
        logReports: logUserReportsAction,
        logOrganogram: logUserOrganogramAction
    };
});

