angular.module('myapp')
    .directive('appHighlight', function(){

        return {
            restrict: 'EA',
            templateUrl: 'highlight.template.html',
            scope: true
        };

    });