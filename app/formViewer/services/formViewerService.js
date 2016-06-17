
(function (angular) {
  'use strict';


      angular.module('serviceCatalog').factory("catalog.formViewerService",formService);

  formService.$inject=['$http'];

  function formService( $http){

    var service={
      getFormData:getFormData
    };
    return service;

       function getFormData() {
        return $http.get("data/chota_form.json");
      }
  }
})(window.angular);