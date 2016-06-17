(function (angular) {
    'use strict';

    angular.module('serviceCatalog').directive('formRenderer', formViewerDirective);

    formViewerDirective.$inject=['$compile','formViewerService', 'formRenderHelper'];

    function  formViewerDirective($compile, formViewerService,formRenderHelper ) {
        var directive = {
            restrict: 'E',
            link : link ,
            template: "<div ng-include='formTemplate'></div>"
        };
        return directive ;

        function link(scope, element, attrs) {
            //var formName = attrs.formName
           scope.formPromise=formViewerService.getFormData("data/chota_form.json");
            scope.formPromise.then(
                function(resp){
                    var jsonForm = resp.data;
                    var formHtml = formRenderHelper.renderForm(jsonForm);
                   formHtml = $compile(formHtml)(scope);
                    //element.appendChild(formHtml);
                    element.replaceWith(formHtml);

                }, function (error) {
                  console.log("retreiving form failed");

                }
            );
            scope.formTemplate = "<div> </div> ";
        }
    }
})(window.angular);