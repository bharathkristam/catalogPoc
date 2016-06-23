(function (angular) {
    'use strict';

    angular.module('components').directive('caTextfield', caTextfieldDirective);

    caTextfieldDirective.$inject = ['catalog.formRenderHelper'];

    function caTextfieldDirective (formRenderHelper) {
        return {
            restrict: 'E',
            templateUrl : 'Components/textfield/TextField.html',
            scope : {
                data : '=',
                rendererCfg : '=',
                parentFormId : '@'
            },
            link: function (scope, element, attrs) {
                var data = scope.data;
                var jElement = $(element);
                var textField = jElement.find('input')[0];
                scope.textFieldLabel = data["name"];
                var attrList = data["attributeValues"];
                if(attrList && attrList.length > 0) {
                    for(var i in attrList){
                        $(textField).attr(formRenderHelper.getAttributeByAlias(attrList[i]["name"]), attrList[i]["value"]);
                    }
                }

            }
        }

    }
})(window.angular);
