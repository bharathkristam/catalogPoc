/**
 * Created by kribh03 on 17-Jun-16.
 */
(function (angular) {
    'use strict';

    angular.module('components').directive('caCombobox', caComboboxDirective);

    caComboboxDirective.$inject = ['catalog.formRenderHelper'];

    function caComboboxDirective (formRenderHelper) {
        return {
            restrict: 'E',
            templateUrl : 'Components/select/Select.html',
            scope : {
                data : '=',
                rendererCfg : '=',
                parentFormId : '@'
            },
            link: function (scope, element, attrs) {
                var data = scope.data;
                var jElement = $(element);
                var comboBox = jElement.find('select');
                scope.comboboxLabel = data["name"];
                var attrList = data["attributeValues"];
                if(attrList && attrList.length > 0) {
                    for(var i in attrList){
                        comboBox.attr(attrList[i]["name"], attrList[i]["value"]);
                    }
                }

            }
        }

    }
})(window.angular);
