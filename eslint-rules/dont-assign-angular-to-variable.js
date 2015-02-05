
module.exports = function(context) {
    'use strict';
    function report(node, name){
        context.report(node, 'You shouldn\'t assign angular to variable {{var}}', {
            var: name
        });
    }
    return {
        'CallExpression': function(node) {
            var init = node.init;
            if(init.hasOwnProperty('callee')){
                if(init.callee.hasOwnProperty('object')){
                    if(init.callee.object.name==="angular"){
                        report(node,node.id.name);
;                    }
                }
            }
        }
    };
};