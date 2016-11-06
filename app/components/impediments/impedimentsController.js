(function() {
    var app = angular.module('routerApp');

    var constants = {
        buttons: ["this shit", "that shit", "shit", "ass", "fuck"],
        headerText: "What might get in the way of your goal?"
    }

    app.controller('impedimentsController', function($scope) {
        var vm = this;
        vm.constants = constants;
        vm.buttons = [];
        for (var i = 0; i < constants.buttons.length; i++) {
            vm.buttons.push({val:constants.buttons[i],active:false});
        }

        vm.setActiveVal = function(button) {
            button.active = !button.active;
        }
    });
})();
