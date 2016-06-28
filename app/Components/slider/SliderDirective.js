(function (angular) {
    'use strict';

    angular.module('components').directive('caSlider', caSliderDirective);

    caSliderDirective.$inject = ['catalog.formRenderHelper'];

    function caSliderDirective (formRenderHelper) {
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
               //TODO

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
