/**
 * Created by kribh03 on 17-Jun-16.
 */

(function (angular) {
    'use strict';

    angular.module('components').directive('caCheckbox', caCheckBoxDirective);

    caCheckBoxDirective.$inject = ['catalog.formRenderHelper'];

    function caCheckBoxDirective (formRenderHelper) {
        return {
            restrict: 'E',
            templateUrl : 'Components/checkbox/CheckBox.html',
            scope : {
                data : '=',
                rendererCfg : '=',
                parentFormId : '@'
            },
            link: function (scope, element, attrs) {
                var data = scope.data;
                var jElement = $(element);
                var cb = jElement.find('input');
                scope.checkboxLabel = data["name"];
                var attrList = data["attributeValues"];
                if(attrList && attrList.length > 0) {
                    for(var i in attrList){
                        var attribute = formRenderHelper.getProcessedAttribute(attrList[i]);

                        if(attribute.name == 'required'){
                            scope.requiredField = true;
                        }
                        if(attribute) {
                            cb.attr(formRenderHelper.getAttributeByAlias(attrList[i]["name"]), attrList[i]["value"]);
                        }
                    }
                }

            }
        }

    }
})(window.angular);
