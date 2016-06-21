(function(){
    "use strict";
    angular.module("ofx")
    .controller("ofxReviewController",ofxReviewController);

    function ofxReviewController($scope, $state, $q, ofxLoadFormService, jsonUrlConstant){
        $scope.jsonUrl = jsonUrlConstant.reviewUrl;
        ofxLoadFormService.renderForm($scope.jsonUrl)
                .then(function(data){
                    $scope.data = data;
                    $scope.schema = $scope.data.schema;
                    $scope.form = $scope.data.form;
                    $scope.model = $scope.data.model;

                    $scope.submit = function(myForm){
                         $scope.$broadcast("schemaFormValidate");
                         if(myForm.$valid){
                             $state.go("home");
                         }
                    }
                });

    }

})();