(function() {
    var app = angular.module('routerApp');

    var constants = {
        headerText: "Choose a couple options to get started!",
        categoryInfo:
        [
            {
                name: 'Pete',
                icon: "fa fa-circle",
                options: [
                    "do something",
                    "another thing",
                    "one more"
                ]
            },
            {
                name: 'Sucks',
                icon: "fa fa-square",
                options: [
                    "option",
                    "another one",
                    "yet another one",
                    "one more"
                ]
            },
            {
                name: 'Eggs',
                icon: "fa fa-diamond",
                options: [
                    "eggs",
                    "cheese",
                    "yogurt",
                    "splenda"
                ]
            },
        ]
    }

    app.controller('difficultyController', function($scope) {
        var vm = this;
        vm.constants = constants;
    });
})();
