define(['angular', './module', 'constants'], function(angular, module) {
    'use strict';

    /**
     * PredixUserService is a sample service which returns information about the user and if they are logged in
     */
    module.factory('PaymentService', ['$q','$http','urls','$window','$rootScope', function($q,$http,urls,$window,$rootScope) {
        return {
          getPaymentList: function(){
            return $http.get(urls.base_url + urls.get_payment_list + '?custId=' + $window.sessionStorage.getItem('customerId'), {
               headers: {
                 'Authorization': 'Bearer ' + $window.sessionStorage.getItem('auth_token'),
                 'x-access-token': $window.sessionStorage.getItem('userToken')
               }
             });
           },
           getPaymentDetails: function(pid){
             return $http.get(urls.base_url + urls.get_payment_details + '/' + pid + '?custId=' + $window.sessionStorage.getItem('customerId'), {
                headers: {
                  'Authorization': 'Bearer ' + $window.sessionStorage.getItem('auth_token'),
                  'x-access-token': $window.sessionStorage.getItem('userToken')
                }
              });
            },
        };
    }]);
});
