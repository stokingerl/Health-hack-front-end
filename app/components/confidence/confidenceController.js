(function() {
    var app = angular.module('routerApp');

    app.controller('confidenceController', function($scope) {
        var vm = this;
        vm.prompt = "How confident are you that you can achieve this goal?";
    });
})();
