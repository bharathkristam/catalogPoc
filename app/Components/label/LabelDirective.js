/**
 * Created by kribh03 on 17-Jun-16.
 */
(function (angular) {
    'use strict';

    angular.module('components').directive('caLabel', caLabelDirective);

    caLabelDirective.$inject = ['catalog.formRenderHelper', '$compile'];

    function caLabelDirective (formRenderHelper, $compile) {
        return {
            restrict: 'E',
            templateUrl : 'Components/label/Label.html',
            scope : {
                data : '=',
                rendererCfg : '=',
                parentFormId : '@'
            },
            link: function (scope, element, attrs) {
                var data = scope.data;
                scope.labelText = data.name;

                var jElement = $(element);
                var label = jElement.find('label')[0];

                var attrList = data["attributeValues"];
                debugger;
                if(attrList && attrList.length > 0) {
                    for(var i in attrList){
                        var attribute = formRenderHelper.getProcessedAttribute(attrList[i]);

                        if(attribute){

                            if(attribute.name =='labelText'){
                                scope.labelText = attribute.value;
                                continue;
                            }
                            $(label).attr(attribute.name, attribute.value);
                        }
                    }
                }
                // let the attribute directive be executed
                $compile(element.contents())(scope);

            }
        }

    }
})(window.angular);
