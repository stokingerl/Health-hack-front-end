(function() {
    var app = angular.module('routerApp');

    app.directive('appHeader',function(){
        return {
            templateUrl: 'app/shared/header/header.html'
        }
    });
})();
