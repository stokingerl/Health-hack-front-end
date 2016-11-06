(function() {
    var app = angular.module('routerApp');

    var constants = {
        lifeGoal: "\"I want to be able to dance at my daughter's wedding.\"",
        concreteGoal: "Lose 20 pounds",
        actionText: "Run for 15 minutes",
        moodText: "How are you feeling today?",
        todayText: "Today",
        bpLabel: "Blood pressure:",
        weightLabel: "Weight:"
    }

    app.controller('homeController', function($scope) {
        var vm = this;
        vm.constants = constants;
    });
})();
