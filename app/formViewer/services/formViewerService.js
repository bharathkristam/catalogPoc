
(function (angular) {
  'use strict';


      angular.module('serviceCatalog').factory("formViewerService",formService);

  formService.$inject=['$http'];

  function formService( $http){

    var service={
      getFormData:getFormData
    };
    return service;

       function getFormData(formId) {
        return $http.get(formId);
      }
  }
})(window.angular);