
(function (angular) {
  'use strict';


      angular.module('components').factory("catalog.formViewerService",formService);

  formService.$inject=['$http'];

  function formService( $http){

    var service={
      getFormData:getFormData
    };
    return service;

       function getFormData() {
        return $http.get("data/components_form.json");
      }
  }
})(window.angular);