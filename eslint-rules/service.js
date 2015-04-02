/**
 * make sure that controllers call a function with the same name
 * angular.modulr('myapp')
 *  .service('myservice',myservice);
 *  function myservice(){...
 */
module.exports = function(context) {
    'use strict';
    function report(node, name1, name2){
        context.report(node, 'service {{service}} should call a function with the same name, {{functionname}} was used', {
            service: name1,
            functionname: name2
        });
    }
    return {
        'CallExpression': function(node) {
            var prefix = context.options[0];
            var callee = node.callee;
            if (callee.type === 'MemberExpression' && callee.property.name === 'service') {
                var name1 = node.arguments[0].value;
                var name2 = node.arguments[1].name;
                if(name1 !== name2){
                    report(node, name1, name2);
                }
            }
        }
    };
};
