(function(){
    "use strict";
    angular.module('ofx')
    .controller("ofxFromController",ofxFromController);

    function ofxFromController($scope, $state, $q, ofxLoadFormService, jsonUrlConstant){
        $scope.jsonUrl = jsonUrlConstant.fromUrl;
        ofxLoadFormService.renderForm($scope.jsonUrl)
                .then(function(data){
                    $scope.data = data;
                    $scope.schema = $scope.data.schema;
                    $scope.form = $scope.data.form;
                    $scope.model = $scope.data.model;

                    $scope.submit = function(myForm){
                         $scope.$broadcast("schemaFormValidate");
                         if(myForm.$valid){
                             $state.go("amount");
                             console.log(myForm);
                             for(var tmp in myForm){
                                console.log(tmp, myForm[tmp]);
                             }
                         }
                    }
                });
    }
})();