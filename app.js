var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('signup', {
            url: '/',
            templateUrl: 'app/components/signup/Signup.html',
            controller: 'signupController as vm'
    })
    .state('home', {
            url: '/home',
            templateUrl: 'app/components/home/homeView.html',
            controller: 'homeController as vm'
    })
    .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'app/components/dashboard/dashboard.html',
            controller: 'dashboardController as vm'
    });
});
