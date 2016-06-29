(function (angular) {
    'use strict';

    angular.module('components').directive('caSlider', caSliderDirective);

    caSliderDirective.$inject = ['catalog.formRenderHelper', '$compile'];

    function caSliderDirective (formRenderHelper, $compile) {
        var directive = {
            restrict: 'E',
            bindToController: true,
            controller: Controller,
            controllerAs: 'vm',
            link: link,
            replace: true,
            templateUrl: 'Components/slider/Slider.html',
            scope: {
                data: '=',
                rendererCfg: '=',
                parentFormId: '@'
            }
        };
        return directive;
    }

    function link(scope, element, attrs) {
        var data = scope.data;
        scope.requiredField = false;
        scope.fieldType = 'text';


        var jElement = $(element);
        var slider = jElement.find('input')[0];

        var attrList = data["attributeValues"];
        if(attrList && attrList.length > 0) {
            for(var i in attrList){
                var attribute = formRenderHelper.getProcessedAttribute(attrList[i]);

                if(attribute){

                    $(slider).attr(attribute.name, attribute.value);
                }
            }
        }
        // let the attribute directive be executed
        $compile(element.contents())(scope);

    }

    Controller.$inject = ['$scope'];
    function Controller($scope) {
        var vm = this;
        vm.onclickslide=function($event){
            var x = document.getElementById("slider").value;
            document.getElementById("slidervalue").innerHTML = x;
        }
    }



})(window.angular);
