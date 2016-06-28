/**
 * Created by kribh03 on 17-Jun-16.
 */
(function (angular) {
    'use strict';

    angular.module('components').directive('caRadiogroup', caRadioGroupDirective);

    caRadioGroupDirective.$inject = ['catalog.formRenderHelper'];

    function caRadioGroupDirective (formRenderHelper) {
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

                        radioBox.attr(formRenderHelper.getAttributeByAlias(attrList[i]["name"]), attrList[i]["value"]);
                    }
                }

            }
        }

    }
})(window.angular);
