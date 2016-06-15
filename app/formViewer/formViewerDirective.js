(function (angular) {
    'use strict';


    //var app=angular.module('serviceCatalog', []);
    angular.module('serviceCatalog').directive('casmTextField', formViewerDirective);

    formViewerDirective.$inject=['formViewerService'];

    function  formViewerDirective(formViewerService) {
        var directive = {
            restrict: 'E',
            link : link ,
            template: "<div ng-include='formTemplate'></div>"
        };
        return directive ;

        function link(scope, element, attrs) {
           scope.formPromise=formViewerService.getFormData();
            scope.formPromise.then(
                function(resp){
                    debugger;
                }, function (error) {
                   debugger;

                }
            );
            scope.formTemplate = "<div> </div> ";
        }
    }
})(window.angular);