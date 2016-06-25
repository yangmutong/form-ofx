(function(){
    "use strict";
    angular.module("ofx.services", [])
    .constant("jsonUrlConstant",{
        contactUrl: "mock/to-contact.json",
        myAccountUrl: "mock/to-myAccount.json",
        fromUrl: "mock/from.json",
        amountUrl: "mock/amount.json",
        reviewUrl: "mock/review.json"
    })
    .constant("uiRouterState", {
        home: {
            stepPercent: "0%",
            current: "home"
        },
        to: {
            stepPercent: "0%",
            current: "to"
        },
        from: {
            stepPercent: "25%",
            current: "from"
        },
        amount: {
            stepPercent: "50%",
            current: "amount"
        },
        review: {
            stepPercent: "75%",
            current: "review"
        }
    })
    .value("stepValue",{
        stepPercent: "0%",
        current: "home"
    })
    .provider('ofxLoadFormService',ofxLoadFormService);

    function ofxLoadFormService(){

        this.$get = function($http, $q){
            var services = {
                renderForm: renderForm
            };

            return services;
            function renderForm(jsonUrl){
                var deferred = $q.defer();

                $http.get(jsonUrl)
                .then(function(response){
                    deferred.resolve(response.data);
                }, function(response){
                    deferred.reject();
                });

                return deferred.promise;
            }
        }
    }
})();