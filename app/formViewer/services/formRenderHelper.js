
(function (angular) {
    'use strict';


    angular.module('serviceCatalog').factory("catalog.formRenderHelper",formRenderHelper);

    function formRenderHelper(){

        var attributeAliases = {
            "emptyText": "placeholder",
            "CSS Class": "class",
            "tooltip": "title",
            "columnWidth": "width",
            "pattern": "ng-pattern",
            "style" : "ng-style"

        };

        var service={
            getAttributeByAlias : getAttributeByAlias

        };

        return service;

        function getAttributeByAlias(alias_name) {
            if(attributeAliases[alias_name]){
                return attributeAliases[alias_name];
            }
            return alias_name;

        }

    }
})(window.angular);