
angular
    .module('')
    .directive('mydirectiv',mydirective);

function mydirective(){
    return {
        restrict: 'EA',
        transclude: false,
        scope: {},
        templateUrl: 'mydirective.html',
        link: function (scope, element) {
            scope.name = 'Jeff';
        }
    };
}
console.log