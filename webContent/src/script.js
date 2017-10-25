/**
 * Created by Gilad on 10/24/2017.
 */
angular.module("myApp", []);

angular.module("myApp").controller("myCtrl", ['$scope', '$interval',
    function ($scope, $interval) {

    }

])

    .directive("angularJsClock", function () {
        return {
            controller: ['$scope', '$interval', function ($scope, $interval) {
                $scope.currTime = new Date().toLocaleTimeString();
                $interval(function () {
                    $scope.currTime = new Date().toLocaleTimeString();

                }, 1000);
            }
            ],
            scope: {},
            // restrict: 'AE',
            template: '<h1>{{currTime}}</h1>'
        }


    });


