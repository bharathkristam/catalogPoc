(function (angular) {
    'use strict';

    angular.module('components').directive('caTextfield', caTextfieldDirective);

    caTextfieldDirective.$inject = ['catalog.formRenderHelper', '$compile'];

    function caTextfieldDirective (formRenderHelper, $compile) {
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

                scope.additionalAttrs = {
                    requiredField : false,
                    fieldType : 'text',
                    hideLabel : false
                };



                var jElement = $(element);
                var textField = jElement.find('input')[0];
                scope.textFieldLabel = data["name"];
                var attrList = data["attributeValues"];
                if(attrList && attrList.length > 0) {
                    for(var i in attrList){
                            var attribute = formRenderHelper.getProcessedAttribute(attrList[i]);

                        if(attribute){
                            if(attribute.name == 'required'){
                                scope.additionalAttrs.requiredField = (attribute.value == 'true');
                            }
                            if(attribute.name == 'password'){
                                scope.additionalAttrs.fieldType = 'password';
                                continue;
                            }
                            if(attribute.name == 'hideLabel'){
                                scope.additionalAttrs.hideLabel = (attribute.value == 'true');
                            }
                            $(textField).attr(attribute.name, attribute.value);
                        }
                    }
                }
            // let the attribute directive be executed
              $compile(element.contents())(scope);

            }
        }

    }
})(window.angular);
