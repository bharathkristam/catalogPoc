/**
 * Created by kribh03 on 17-Jun-16.
 */
(function (angular) {
    'use strict';

    angular.module('components').directive('caRadiogroup', caRadioGroupDirective);

    caRadioGroupDirective.$inject = ['catalog.formRenderHelper', '$compile'];

    function caRadioGroupDirective (formRenderHelper, $compile) {
        return {
            restrict: 'E',
            templateUrl : 'Components/radiobutton/RadioGroup.html',
            scope : {
                data : '=',
                rendererCfg : '=',
                parentFormId : '@'

            },
            link: function (scope, element, attrs) {
                var data = scope.data;
                scope.hideLabel = false;
                scope.orientation = 'vertical';

                var jElement = $(element);
                var radioBox = jElement.find('#radioGroup_'+ data.id);

                var attrList = data["attributeValues"];
                if(attrList && attrList.length > 0) {
                    for(var i in attrList){
                        if(attrList[i].name == 'hideLabel'){
                            scope.hideLabel = attrList[i].value == 'true';
                            continue;
                        }
                        if(attrList[i].name == 'orientation'){
                            scope.orientation = attrList[i].value;
                            continue;
                        }
                        var attribute = formRenderHelper.getProcessedAttribute(attrList[i]);

                        if(attribute) {
                            radioBox.attr(attrList[i]["name"], attrList[i]["value"]);
                        }

                    }
                }
                // let the attribute directive be executed
                $compile(element.contents())(scope);
            }
        }

    }
})(window.angular);
