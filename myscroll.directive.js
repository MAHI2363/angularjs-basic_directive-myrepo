angular.module('myapp')
.directive('myScroll',function(){
    return{
        restrict: 'A',
        link: function(scope, element, attrs){

            console.log(attrs);
            //element.css("max-height", '20px');
            element.css("max-height", attrs.myScroll+ 'px');
            
            element.css("overflow-y", "auto");
        }

    }
})