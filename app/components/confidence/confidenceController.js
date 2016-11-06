(function() {
    var app = angular.module('routerApp');

    app.controller('confidenceController', function($scope) {
        var vm = this;
        vm.slider = new Slider("input.slider", {
        	min: 0,
        	max: 5,
        	step: 1
        });
        vm.prompt = "How confident are you that you can achieve this goal?";
    });
})();
