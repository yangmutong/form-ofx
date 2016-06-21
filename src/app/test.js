(function(){
    angular.module("ofx",['schemaForm'])
    .provider("testServices", testServices)
    .controller("testController", testController);


    function testController($scope, $q, testServices){
        testServices.setJsonUrl("src/app/mock/test.json");
        console.log("json url is " + testServices.jsonUrl);
        testServices.renderForm()
                .then(function(data){
                    $scope.data = data;
                    $scope.schema = $scope.data.schema;
                    $scope.form = $scope.data.form;
                    $scope.model = $scope.data.model;

//                    $scope.schema = {
//                             "type": "object",
//                             "title": "Comment",
//                             "properties": {
//                                "name": {
//                                    "title": "Name",
//                                    "type": "string"
//                                },
//                                "email":{
//                                    "title": "Email",
//                                    "type": "string",
//                                    "pattern": "^\\S+@\\S+$",
//                                    "description": "Email will be used for evil"
//                                },
//                                "comment":{
//                                    "title": "Comment",
//                                    "type": "string",
//                                    "maxLength": 20,
//                                    "validationMessage": "Don't be greedy!"
//                                }
//                             },
//                             "required":[
//                                "name",
//                                "email",
//                                "comment"
//                             ]
//                           };
//
//                    $scope.form = [
//                             "name",
//                             "email",
//                             {
//                                "key": "comment",
//                                "type": "textarea",
//                                "placeholder": "Make a comment"
//                             },
//                             {
//                                "type": "submit",
//                                "style": "btn-info",
//                                "title": "OK"
//                             }
//                           ];


                    $scope.submit = function(form){
                        $scope.$broadcast("schemaFormValidate");

                    }

                    $scope.redraw = function(){
                        //change sf-form or sf-schema will redraw the form
                        //doing something to make sf-form or sf-schema change
                        $scope.$broadcast("schemaFormRedraw");

                    }
                })
    }



    function testServices(){
        var jsonUrl;

        this.setJsonUrl = function(url){
            jsonUrl = url;
        }

        this.$get = function($http, $q){
            var service = {
                jsonUrl: jsonUrl,
                renderForm: renderForm,
                setJsonUrl: setJsonUrl
            };

            return service;

            function setJsonUrl(url){
                jsonUrl = url;
            }

            function renderForm(){
                var deferred = $q.defer();

                $http.get(jsonUrl)
                     .then(function(response){
                        deferred.resolve(response.data);
                     }, function(response){
                        deferred.reject({});
                     });

                return deferred.promise;
            }
        }
    }


})();