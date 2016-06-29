/**
 * Created by kribh03 on 17-Jun-16.
 */
(function (angular) {
    'use strict';

    angular.module('components').directive('caSpinner', caSpinnerDirective);

    caSpinnerDirective.$inject = ['catalog.formRenderHelper', '$compile'];

    function caSpinnerDirective (formRenderHelper, $compile) {
        return {
            restrict: 'E',
            templateUrl : 'Components/spinner/Spinner.html',
            scope : {
                data : '=',
                rendererCfg : '=',
                parentFormId : '@'
            },
            link: function (scope, element, attrs) {
                var data = scope.data;
                var jElement = $(element);
                var spinner = jElement.find('input')[0];
                scope.spinnerLabel = data["name"];
                var attrList = data["attributeValues"];
                if(attrList && attrList.length > 0) {
                    for(var i in attrList){
                        var attribute = formRenderHelper.getProcessedAttribute(attrList[i]);

                        if(attribute) {
                            $(spinner).attr(attrList[i]["name"], attrList[i]["value"]);
                        }
                    }
                }
                // let the attribute directive be executed
                $compile(element.contents())(scope);
            }
        }

    }
})(window.angular);
