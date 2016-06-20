(function (angular) {
    'use strict';

    angular.module('components').directive('caTextarea', function(formRenderHelper) {
        return {
            restrict: 'E',
            templateUrl : 'Components/textarea/TextArea.html',
            scope : {
                data : '=',
                load : '=',
                parentFormId : '@'
            },
            link: function (scope, element, attrs) {
                //scope.data;
                //var jElement = $(element);
                //var textArea = jElement.find('textarea')[0];
                //scope.textFieldLabel = data["name"];
                //var attrList = scope.data["attributeValues"];
                //if(attrList.length > 0) {
                //    for(var i in attrList){
                //        textArea.attribute(formRenderHelper.getAttributeByAlias(attrList["name"]), attrList["value"]);
                //    }
                //}

            }
        }

    });
})(window.angular);
