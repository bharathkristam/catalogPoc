
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
/*
        function getFormEntityByType(type_id, attrList) {
            var htmlElement = formEntityMap.getHtmlById(type_id);
            var pos = htmlElement.indexOf(">");
            var startTag = htmlElement.substring(0, pos);
            var endTag = htmlElement.substring(pos, htmlElement.length);

            for(var i in attrList){
                //TODO handle any exceptions here

                startTag += (attrList[i]["name"]) + "=";
                startTag += "'" + (attrList[i]["value"] + "' ");

            }
          startTag += (endTag);

            if(type_id !=2)
                return "<div>" + startTag + "</div>";

            return startTag;
        }*/


        function getAttributeByAlias(alias_name) {
                if(attributeAliases[alias_name]){
                    return attributeAliases[alias_name];
                }
                return alias_name;

        }

  /*      function renderForm (jsonForm) {
            console.log("In render Form");
            var finalTemplate = "";
            if(jsonForm.type == 2){
                console.log("json is of Form type");

                finalTemplate = recursiveParser (jsonForm);
            }

            return finalTemplate;
        }

        function recursiveParser (json) {
            var template = getFormEntityByType(json.type, json.attributeValues);

            var pos = template.lastIndexOf("<");
            var startTag = template.substring(0, pos);
            var endTag = template.substring(pos, template.length);

            if(json.children){
                for(var i=0; i< json.children.length; i++) {
                    var childTemplate = recursiveParser(json.children[i]);
                    startTag += childTemplate;
                }
            }
                return startTag + endTag;
        }*/

    }
})(window.angular);