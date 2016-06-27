(function (angular) {
    'use strict';

    angular.module('customAttributes').directive('hint',function($compile) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                scope.fieldId = attrs.id;
                if (attrs.hint) {
                    scope.hintSupport = attrs.hint;
                    var tpl = '<div role="presentation" style="color: black;font-size: 10px; line-height: 10px">{{hintSupport}}</div>';
                    var el = $compile(tpl)(scope);
                    element.after(el);
                }

            }
        }

    });
})(window.angular);
