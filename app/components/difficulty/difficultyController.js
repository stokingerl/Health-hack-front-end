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
                    "Take daily blood pressure reading",
                    "Walk an additional 10 minutes in your day",
                    "Regular breathing exercises"
                ]
            },
            {
                blue: false,
                purple: false,
                green: true,
                icon: "fa fa-square",
                options: [
                    "Eat a low salt diet at home",
                    "15 minutes of moderate physical activity",
                    "Regular positive self-coaching/self-talk"
                ]
            },
            {
                blue: false,
                purple: true,
                green: false,
                icon: "fa fa-diamond",
                options: [
                    "Eat small portions every three to four hours",
                    "30 minutes of vigorous physical activity",
                    "Regular 10 minute meditation breaks"
                ]
            },
        ]
    }

    app.controller('difficultyController', function($scope) {
        var vm = this;
        vm.constants = constants;
    });
})();
