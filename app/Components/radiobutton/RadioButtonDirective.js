(function (angular) {
    'use strict';

    angular.module('components').directive('caRadiobutton', caRadioButtonDirective);

    caRadioButtonDirective.$inject = ['catalog.formRenderHelper'];

    function caRadioButtonDirective (formRenderHelper) {
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
                debugger;
                var attrList = data["attributeValues"];
                if(attrList && attrList.length > 0) {
                    for(var i in attrList){
                        radioBox.attr(formRenderHelper.getAttributeByAlias(attrList[i]["name"]), attrList[i]["value"]);
                    }
                }

            }
        }

    }
})(window.angular);
