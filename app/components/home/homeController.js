(function() {
    var app = angular.module('routerApp');

    app.controller('homeController', function($scope) {
        var vm = this;
        vm.text = "Hello World!";
    });
})();
