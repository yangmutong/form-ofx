/**
 * Created by MuTong Yang on 2016/6/14/0014.
 */
(function(){
    'use strict';
    angular.module('ofx',['ui.router','schemaForm','ofx.services'])
        .config(function($locationProvider, $stateProvider, $urlRouterProvider){
            //$locationProvider.html5Mode(true);

            $urlRouterProvider.otherwise('/home');

            $stateProvider.state("home",{
                url:"/home",
                views: {
                    "transfer": {
                        templateUrl: "src/app/home/home.tpl.html",
                        controller: "ofxHomeController"
                    }
                }
            }).state("to",{
                url: "/to",
                views: {
                    "transfer": {
                        templateUrl: "src/app/to/to.tpl.html",
                        controller: "ofxToController"
                    }
                }
            })
            .state("to.contact",{
                url:"/contact",
                views:{
                    "selectTo":{
                        templateUrl:"src/app/to/contact/contact.tpl.html",
                        controller:"ofxToContactController"
                    }
                }
            }).state("to.myAccount",{
                url:"/myAccount",
                views:{
                    "selectTo":{
                        templateUrl:"src/app/to/myAccount/my-account.tpl.html",
                        controller:"ofxToMyAccountController"
                    }
                }
            }).state("from",{
                url:"/from",
                views: {
                    "transfer": {
                        templateUrl: "src/app/from/from.tpl.html",
                        controller:"ofxFromController"
                    }
                }
            }).state("amount",{
                url:"/amount",
                views: {
                    "transfer": {
                         templateUrl: "src/app/amount/amount.tpl.html",
                         controller:"ofxAmountController"
                    }
                }
            }).state("review",{
                url:"/review",
                views: {
                    "transfer": {
                        templateUrl:"src/app/review/review.tpl.html",
                        controller:"ofxReviewController"
                    }
                }

            });

        })
        .controller("ofxController", ofxController);

        function ofxController($scope, $state, uiRouterState){
            $scope.$on("$stateChangeSuccess", function(){
                var route_name = $state.current.name;
                $scope.stepPercent;
                $scope.current;
                if(uiRouterState[route_name]){
                    $scope.stepPercent = uiRouterState[route_name].stepPercent;
                    $scope.current = uiRouterState[route_name].current;
                }
            })
        }
        //原本用的rootScope，在每次state.go之前设置rootscope的属性，用以更改step，在二者之间加一个确认过渡的效果，现在改过来发现不对劲，或许可以二者结合使用


//        .controller('ofxController',ofxController);
//
//        function ofxController($scope, $state, $timeout){
//            $scope.stepObj = {
//                step: 0;
//                current: "home"
//            };
//
//        }
})();