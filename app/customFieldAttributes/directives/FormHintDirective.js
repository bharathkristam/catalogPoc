(function (angular) {
    'use strict';

    angular.module('serviceCatalog').directive('hint',function($compile) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                debugger;
                if (attrs.hint) {
                    scope.hintSupport = attrs.hint;
                    var tpl = '<div style="color: black;">{{hintSupport}}</div>';
                    var el = $compile(tpl)(scope);
                    element.after(el);
                }

            }
        }

    });
})(window.angular);
