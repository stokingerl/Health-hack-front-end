(function() {
    var app = angular.module('routerApp');

    var constants = {
        lifeGoal: "\"I want to be able to dance with my daughter at her wedding.\"",
        macroLabel: "Macro Goal",
        concreteGoal: "Lose 20 pounds",
        microLabel: "Micro Goals",
        actionText: ["Run for 15 minutes","Meditate"],
        todayText: "Today",
        bpLabel: "Blood pressure:",
        weightLabel: "Weight:",
        moodLabel: "How are you feeling today?"
    }

    app.controller('homeController', function($scope) {
        var vm = this;
        vm.constants = constants;
    });
})();
