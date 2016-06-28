
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
            getAttributeByAlias : getAttributeByAlias,
            getProcessedAttribute : getProcessedAttribute

        };

        return service;

        function getAttributeByAlias(alias_name) {
            if(attributeAliases[alias_name]){
                return attributeAliases[alias_name];
            }
            return alias_name;

        }

        function getProcessedAttribute(attrObj) {
            var attrName = attrObj.name.toLowerCase();
            switch(attrName){
                case 'required':
                case 'hidden':
                case 'disabled':
                case 'checked':
                case 'password':
                    if(attrObj.value == 'true' || attrObj.value == true){
                        return attrObj;
                    }
                    else return null;
                    break;

                case 'emptytext':
                case 'css class':
                case 'tooltip':
                case 'columnwidth':
                case 'pattern':
                case 'patternmessage':
                case 'style':
                    // any other that need alias
                    var attribute = attrObj;
                    attribute.name = getAttributeByAlias(attrObj.name);
                    return attribute;
                    break;

                case 'editable':
                    var attribute = attrObj;
                    attribute.value = !(attrObj.value);
                    attribute.name = 'readonly';
                    return attribute;
                break;

                default :
                    return attrObj;
            }
        }

    }
})(window.angular);