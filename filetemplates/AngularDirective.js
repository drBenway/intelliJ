angular
    .module('$app')
    .directive('$directiveName',$directiveName);

function $directiveName(){
    return {
        restrict: 'EA',
        transclude: false,
        scope: {},
        templateUrl: '$directiveName.html',
        link: function (scope, element) {

        }
    };
}

