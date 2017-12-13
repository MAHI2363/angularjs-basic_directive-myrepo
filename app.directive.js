angular.module('myapp')
    .directive('appHighlight', function(){

        return {
            restrict: 'EA',
            templateUrl: 'highlight.template.html',
            controller:function($scope,$element){
                $element.find('h3').css('color', 'red');
                $scope.onClick = function(){
                    $scope.myVal = "modified";
                }
            },
            scope: {
                myTitle: '@',
                myVal:'='
            },
            link: function(scope, element, attrs){
                console.log(element);
                element.find('h3').css('color', 'red');
            }
        };

    });