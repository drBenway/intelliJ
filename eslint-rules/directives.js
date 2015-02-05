/**
 * Created by D-BS21WG on 4/02/2015.
 * make sure that directives call a function with the same name
 * angular.modulr('myapp')
 *  .directive('mydirective',mydirective);
 *  function mydirective(){...
 */
module.exports = function(context) {
    'use strict';
    function report(node, name1, name2){
        context.report(node, 'directive {{directive}} should call a function with the same name, {{functionname}} was used', {
            directive: name1,
            functionname: name2
        });
    }
    return {
        'CallExpression': function(node) {
            var prefix = context.options[0];
            var callee = node.callee;
            if (callee.type === 'MemberExpression' && callee.property.name === 'directive') {
                var name1 = node.arguments[0].value;
                var name2 = node.arguments[1].name;
                if(name1 !== name2){
                    report(node, name1, name2);
                }
            }
        }
    };
};