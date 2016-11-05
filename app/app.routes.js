(function() {
    var app = angular.module("webApp", ['ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider

        .when('/', {
            templateUrl: 'components/home/homeView.html',
            controller: 'homeController'
        })

        .otherwise( {
            redirectTo: '/'
        });
    });
})();
