/**
 * Created by MuTong Yang on 2016/6/14/0014.
 */
(function(){
    'use strict';
    angular.module('ofx',['ui.router', ''])
        .config(function($provider, $locationProvider, $stateProvider, $urlRouterProvider){
            $locationProvider.html5Mode(true);

            $urlRouterProvider.otherwise('/');

            $stateProvider.state("home",{
                url:"/home",
                templateUrl: "home/home.tpl.html",
                controller: "ofxHomeController"
            }).state("to",{
                url: "/to",
                templateUrl: "to/to.tpl.html",
                controller: "ofxToController"
            }).state("to.contact",{
                url:"/contact",
                templateUrl:"to/contact/contact.tpl.html",
                controller:"ofxToContactController"
            }).state("to.myAccount",{
                url:"/myAccount",
                templateUrl:"to/myAccount/my-account.tpl.html",
                controller:"ofxToMyAccountController"
            }).state("from",{
                url:"/from",
                templateUrl: "from/from.ypl.html",
                controller:"ofxFromController"
            }).state("amount",{
                url:"/amount",
                templateUrl: "amount/amount.tpl.html",
                controller:"ofxAmountController"
            }).state("review",{
                url:"/review",
                templateUrl:"review/review.tpl.html",
                controller:"ofxReviewController"
            });

        });
})();