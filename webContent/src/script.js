/**
 * Created by Gilad on 10/24/2017.
 */
angular.module("myApp", []);

angular.module("myApp").controller("myCtrl", ['$scope', '$interval',
    function ($scope, $interval) {
        $scope.greeting = "Good morning!";
        $scope.currTime = new Date().toLocaleTimeString();
        $interval(function () {
            $scope.currTime = new Date().toLocaleTimeString();

        }, 1000);
    }

])
    .directive('helloWorld', function () {
        return {
            controller: [function () {

            }],
            restrict: 'AE',
            replace: true,  //Determines whether to replace the template with the directive tags or to insert the template between the name tags of the directive name like this: <helloworrld>template</helloworrld>.
            scope: {}, //scope: * false (is the default) = Inheritance from the parent controler
                       //       * True = 1.)Inheritance from the parent controler. 2.)private instance
                       //       * [] = its mean Isolated. can to defined private conroler. like in angularJsclock directive below.
            template: '<p style="background-color:{{color}}">{{text}}</p>', //link allows to perform operations after the interpolation has been performed. Such as injections of the scope and the allemebt and attributes.
            link: function (scope, elem, attrs) {
                scope.color = attrs.color;
                scope.greeting = "Have a good evening...";
                scope.text = "Hello" + " " + attrs.name + " " + attrs.family + ", " + scope.greeting;
                elem.bind('click', function () {
                    elem.css('background-color', 'red');
                });

                elem.bind('mouseover', function () {
                    elem.css('cursor', 'pointer');
                });
            }
        };
    })
    .directive("angularJsClock", function () {
        return {
            controller: ['$scope','$interval',function ($scope, $interval) {
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
        // link: function () {
        //     scope.clock= $scope.currTime;
        //
        // }


    });


// elem.bind('click', function() {
//     elem.css('background-color', 'blue');
//     scope.$apply(function() {
//         scope.color = "red";
//     });
