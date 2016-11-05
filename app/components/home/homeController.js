(function() {
    var app = angular.module('webApp',[]);

    app.controller('homeController', function($scope) {
        $scope.text = "Hello World!";
    });
})();
