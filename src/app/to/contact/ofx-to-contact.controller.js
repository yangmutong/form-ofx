(function(){
    "use strict";
    angular.module("ofx")
    .controller("ofxToContactController",ofxToContactController);


    function ofxToContactController($scope, $state, $q, ofxLoadFormService, jsonUrlConstant){
        $scope.jsonUrl = jsonUrlConstant.contactUrl;
        ofxLoadFormService.renderForm($scope.jsonUrl)
                .then(function(data){
                    $scope.data = data;
                    $scope.schema = $scope.data.schema;
                    $scope.form = $scope.data.form;
                    $scope.model = $scope.data.model;

                    $scope.submit = function(myForm){
                         $scope.$broadcast("schemaFormValidate");
                         if(myForm.$valid){
                             $state.go("from");
                         }
                    }
                });
    }
})();