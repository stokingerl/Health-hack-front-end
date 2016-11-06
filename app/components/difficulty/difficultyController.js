(function() {
    var app = angular.module('routerApp');

    var constants = {
        headerText: "Choose one or two items:",
        categoryInfo:
        [
            {
                blue: true,
                purple: false,
                green: false,
                icon: "fa fa-circle",
                options: [
                    "Diet - Eat a low salt diet at home",
                    "Exercise - Walk an additional 10 minutes in your day",
                    "Stress - Regular breathing exercises"
                ]
            },
            {
                blue: false,
                purple: false,
                green: true,
                icon: "fa fa-square",
                options: [
                    "Diet - Increase potassium in your daily intake",
                    "Exercise - 15 minutes of moderate physical activity",
                    "Stress - Regular positive self-coaching/self-talk"
                ]
            },
            {
                blue: false,
                purple: true,
                green: false,
                icon: "fa fa-diamond",
                options: [
                    "Diet - Eat small portions every three to four hours",
                    "Exercise - 30 minutes of vigorous physical activity",
                    "Stress - Regular 10 minute meditation breaks"
                ]
            },
        ]
    }

    app.controller('difficultyController', function($scope) {
        var vm = this;
        vm.constants = constants;
    });
})();
