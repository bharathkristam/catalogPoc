(function(angular) {
    'use strict';

    angular.module('components').controller('catalog.formController', formController);

    formController.$inject = ['$scope', 'catalog.formRenderHelper', 'catalog.formViewerService'];

    function formController ($scope, formRenderHelper, formViewerService) {


        $scope.parentJson = {};

        init();

        function init() {
            formViewerService.getFormData().then(function(response){
                $scope.parentJson = response.data.root.COLLECTION.INFO.form_data.formsJSON;
            },
            function(errorResponse){

            })
        }
    }
})(window.angular);
