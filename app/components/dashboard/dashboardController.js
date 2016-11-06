(function() {
    var app = angular.module('routerApp');

    app.controller('dashboardController', function($scope) {
        var vm = this;
        vm.labels = ["8/1/16", "8/3/16", "8/5/16", "8/7/16", "8/9/16", "8/11/16", "8/13/16", "8/15/16", "8/17/16", "8/19/16", "8/21/16", "8/23/16", "8/25/16", "8/27/16", "8/29/16", "8/31/16", "9/2/16", "9/4/16", "9/6/16", "9/8/16", "9/10/16", "9/12/16", "9/14/16", "9/16/16", "9/18/16", "9/20/16", "9/22/16", "9/24/16", "9/26/16", "9/28/16", "9/30/16", "10/2/16", "10/4/16", "10/6/16"
		];

		vm.secondLabels = ["8/1/16", "8/7/16", "8/13/16", "8/19/16", "8/25/16", "8/31/16", "9/6/16", "9/12/16", "9/18/16", "9/24/16", "9/30/16"]
        vm.data = [
        	[186,206,191,189,201,183,192,207,180,192,171,186,186,171,183,172,179,157,170,170,162,170,170,163,159,127,131,128,124,115,137,119,125,117],
        	[118,105,115,113,113,118,119,108,117,99,102,99,97,102,98,96,97,93,96,95,90,89,92,90,89,89,87,90,88,87,89,88,80,82]
        ];
        vm.secondData = [
        	
        	165, 168, 166, 169, 166, 164, 167, 165, 163, 162, 161, 160
        	
		];
		vm.secondSeries=["Weight"];
		vm.series=["Diastolic", "Systolic"];

        vm.override = [{fill:false, borderWidth: 10, borderJoinStyle:"round", pointBorderWidth:1}, {fill:false, borderWidth:10, pointBorderWidth:1}];
        vm.options = {
        	legend:{
        		display:true,
        		labels: {
        			fontSize: 30
        		}
        	},
        	scales: {
        		yAxes:[{
        			ticks:{
        				fontSize:30
        			}
        		}],
        		xAxes:[{
        			type: 'time',
        			time: {
        				unit: 'week'
        			}
        		}]
        	}
        }

        vm.secondOptions = {
        	scales: {
        		yAxes:[{
        			ticks:{
        				max: 175,
        				min: 150,
        				fontSize: 30
        			}
        		}]
        	}
        }
        vm.text = "Hello World!";
    });
})();
