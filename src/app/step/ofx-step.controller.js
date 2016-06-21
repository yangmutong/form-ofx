(function(){
    "use strict";
    angular.module("ofx")
        .controller("ofxStepController", ofxStepController);

    function ofxStepController($scope, $state, stepValue){
        console.log($scope);
        console.log($state.current);
        console.log(stepValue.stepPercent);
        console.log(stepValue.current);
    }
})();