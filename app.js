var routerApp = angular.module('routerApp', ['ui.router', 'ngAnimate']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('signup', {
            url: '/signup',
            templateUrl: 'app/components/signup/signup.html',
            controller: 'signupController as vm'
    })
    .state('signup.goal', {
            url: '/goal',
            templateUrl: 'app/components/goal/goal.html',
            controller: 'goalController as vm'
    })
    .state('signup.category', {
            url: '/category',
            templateUrl: 'app/components/category/category.html',
            controller: 'categoryController as vm'
    })
    .state('signup.motivation', {
            url: '/motivation',
            templateUrl: 'app/components/motivation/motivation.html',
            controller: 'motivationController as vm'
    })
    .state('signup.subcategory', {
            url: '/subcategory',
            templateUrl: 'app/components/subcategory/subcategory.html',
            controller: 'subcategoryController as vm'
    })
    .state('signup.difficulty', {
            url: '/difficulty',
            templateUrl: 'app/components/difficulty/difficulty.html',
            controller: 'difficultyController as vm'
    })
    .state('signup.impediments', {
            url: '/impediments',
            templateUrl: 'app/components/impediments/impediments.html',
            controller: 'impedimentsController as vm'
    })
    .state('signup.schedule', {
            url: '/schedule',
            templateUrl: 'app/components/schedule/schedule.html',
            controller: 'scheduleController as vm'
    })
    .state('signup.confidence', {
            url: '/confidence',
            templateUrl: 'app/components/confidence/confidence.html',
            controller: 'confidenceController as vm'
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
