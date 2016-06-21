(function (angular) {
    'use strict';

    angular.module('components').directive('caForm', function() {
        return {
            restrict: 'E',
            templateUrl : 'Components/form/FormContainer.html',
            scope : {
                data : '=',
                load : '=',
                parentOfferingId : '@'
            },
            controller: "catalog.formController",
            link: function (scope, element, attrs) {
                scope.data;

                var attrList = scope.data["attributeValues"];
                if(attrList.length > 0) {
                    for(var i in attrList){
                        element.attribute(formRenderHelper.getAttributeByAlias(attrList["name"]), attrList["value"]);
                    }
                }

            }
        }

    });
})(window.angular);
