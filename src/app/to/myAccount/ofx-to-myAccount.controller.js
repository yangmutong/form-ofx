(function(){
    "use strict";
    angular.module("ofx")
    .controller("ofxToMyAccountController",ofxToMyAccountController);

    function ofxToMyAccountController($scope, $state, $q, ofxLoadFormService, jsonUrlConstant){
        $scope.jsonUrl = jsonUrlConstant.myAccountUrl;
        ofxLoadFormService.renderForm($scope.jsonUrl)
                .then(function(data){
                    $scope.data = data;
                    $scope.schema = $scope.data.schema;
                    $scope.form = $scope.data.form;
                    $scope.model = $scope.data.model;
                    //to-to: validationg with data-binding 双向绑定,减少事件代码
                    //MVC架构的改进
                    $scope.submit = function(myForm){
                        $scope.$broadcast("schemaFormValidate");
                        if(myForm.$valid){
                            $state.go("from");
                        }
                    }
                });
    }
})();