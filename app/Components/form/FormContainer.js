(function (angular) {
    'use strict';

    angular.module('components').directive('caForm', formDirective);

    formDirective.$inject = ['catalog.formRenderHelper', '$parse'];
    function formDirective (formRenderHelper, $parse){
        return {
            restrict: 'E',
            templateUrl : 'Components/form/FormContainer.html',
            scope : {
                data : '=',
                rendererCfg : '=',
                parentOfferingId : '@'
            },
            controller: "catalog.formController",
            link: function (scope, element, attrs) {
                var json = $parse(attrs.data);

                var attrList = json["attributeValues"];
                if(attrList && attrList.length > 0) {
                    for(var i in attrList){
                        element.attr(formRenderHelper.getAttributeByAlias(attrList["name"]), attrList["value"]);
                    }
                }

            }
        }

    }
})(window.angular);
