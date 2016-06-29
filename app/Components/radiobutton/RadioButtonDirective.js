(function (angular) {
    'use strict';

    angular.module('components').directive('caRadiobutton', caRadioButtonDirective);

    caRadioButtonDirective.$inject = ['catalog.formRenderHelper', '$compile'];

    function caRadioButtonDirective (formRenderHelper, $compile) {
        return {
            restrict: 'E',
            templateUrl : 'Components/radiobutton/RadioButton.html',
            scope : {
                group : '@',
                data : '=',
                rendererCfg : '=',
                parentContainerId : '@'

            },
            link: function (scope, element, attrs) {
                var data = scope.data;
                var jElement = $(element);
                var radioBox = jElement.find('input');
                var attrList = data["attributeValues"];
                if(attrList && attrList.length > 0) {
                    for(var i in attrList){
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
