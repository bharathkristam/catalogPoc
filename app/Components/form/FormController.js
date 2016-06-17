(function(angular) {
    'use strict';

    angular.module('components').controller('catalog.formController', formController);

    formController.$inject = ['$scope', 'catalog.formRenderHelper', 'catalog.formViewerService'];

    function formController (formRenderHelper, formViewerService) {


        $scope.parentJson = {};

        init();

        function init() {
            formViewerService.getFormData().then(function(response){
                $scope.parentJson = response.data;
            },
            function(errorResponse){

            })
        }
    }
})(window.angular);
