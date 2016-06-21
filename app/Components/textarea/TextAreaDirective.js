(function (angular) {
    'use strict';

    angular.module('components').directive('caTextarea', caTextAreaDirective);

    caTextAreaDirective.$inject = ['catalog.formRenderHelper'];

    function caTextAreaDirective (formRenderHelper) {
        return {
            restrict: 'E',
            templateUrl : 'Components/textarea/TextArea.html',
            scope : {
                data : '=',
                rendererCfg : '=',
                parentFormId : '@'
            },
            link: function (scope, element, attrs) {
                var data = scope.data;
                var jElement = $(element);
                var textArea = jElement.find('textarea')[0];
                scope.textareaLabel = data["name"];
                var attrList = data["attributeValues"];
                if(attrList && attrList.length > 0) {
                    for(var i in attrList){
                        $(textArea).attr(attrList[i]["name"], attrList[i]["value"]);
                    }
                }

            }
        }

    }
})(window.angular);
