(function (angular) {
    'use strict';


    angular.module('serviceCatalog').factory("formEntityMap",formEntityMap);

    formEntityMap.$inject=['$http'];

    function formEntityMap( $http){

        var service={
            getHtmlById : getHtmlById,
            getFormEntityParent : getParentByTypeId,
            getFormEntityParentByName : getParentByName,
            getFormEntityIdByType : getFormEntityIdByType


        };
        var  formEntityTable = [];

        initialize();

        return service;


        function initialize() {
            var formEntityPromise = $http.get("data/form_entity.json");
            formEntityPromise.then(function(response){
                //success
                var entityJson = response.data;
                    formEntityTable = entityJson["form_entities"];
                    console.log("Entity table is "+ entityJson);
            },
            function (error) {

            });

        }

        function getHtmlById(field_type_id) {
            var fieldType = parseInt(field_type_id);
            if(formEntityTable.length > 1){

                switch(fieldType){
                    //ignore 1 since it's the folder
                    case 2:
                        return '<form></form>';
                    break;
                    case 5:
                        //TODO write down any default attrs here. For example class="txtfield"
                        return "<input type='text' ></input>";
                    break;

                }
            }

        }

        function getParentByTypeId(field_type_id) {
            var key = 'form_entity_type' ;
            return this.searchMatchingField(key, field_type_id);

        }

        function getParentByName(field_name ) {
            var key = 'form_entity_name' ;
            return this.searchMatchingField(key, field_name);
        }

        function getFormEntityIdByType(field_type_id) {
            var key = 'form_entity_type';
            var form_entity = this.searchMatchingField(key, field_type_id);
            if(form_entity)
                return form_entity["form_entity_id"];
        }

        function searchMatchingField(key, value){
            var matchFound = false;
            for( var i in this.formEntityTable) {
                if(formEntityTable[i][key] == value ){
                    matchFound = this.formEntityTable[i];
                    break;
                }
            }

            return matchFound;
        }
    }
})(window.angular);