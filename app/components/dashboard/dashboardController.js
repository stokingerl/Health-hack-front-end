(function() {
    var app = angular.module('routerApp');

    app.controller('dashboardController', function($scope) {
        var vm = this;
        vm.text = "Hello World!";
    });
})();
