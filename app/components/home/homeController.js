(function() {
    var app = angular.module('routerApp');

    var constants = {
        lifeGoal: "\"I want to be able to dance with my daughter at her wedding.\"",
        macroLabel: "Macro Goal",
        concreteGoal: "Lower Blood Pressure",
        microLabel: "Micro Goals",
        actionText: ["Monitor Blood Pressure","Monitor Diet"],
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
