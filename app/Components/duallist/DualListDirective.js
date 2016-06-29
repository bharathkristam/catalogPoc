(function (angular) {
    'use strict';

    angular.module('components').directive('caDuallist', caDualListDirective);
    caDualListDirective.$inject = ['$document', '$filter','$interpolate', 'catalog.formRenderHelper'];

    function caDualListDirective ($document, $filter, $interpolate, formRenderHelper) {

        var directive = {
                link: link,
                restrict: 'E',
                templateUrl : 'Components/duallist/DualList.html',
                controller: Controller,
                scope : {
                    data : '=',
                    rendererCfg : '=',
                    parentFormId : '@'
                },
                compile: function (tElement){
                    
                    var startSym = $interpolate.startSymbol();
                    var endSym = $interpolate.endSymbol();
                    
                    if (!(startSym === '{{' && endSym === '}}')) {
                        var interpolatedHtml = tElement.html()
                            .replace(/\{\{/g, startSym)
                            .replace(/\}\}/g, endSym);
                        tElement.html(interpolatedHtml);
                    }
                    return link;
                }
        };
        return directive;
        
        function link(scope, elem, attrs) {
            //var data = scope.data;
            
            scope.leftscope.control = angular.element(elem[0].querySelector('.x-left-scope'))[0];
            scope.rightscope.control = angular.element(elem[0].querySelector('.x-right-scope'))[0];
            
           //console.log(data.id+':'+angular.element(dl_right).html());
            scope.onFocusHandler = function (data) {
                if(data.selected.length === 0 && data.values.length > 0){
                   data.selected = [data.values[0].id];
                }
            };
        }
        
        function Controller ($scope) {
            console.log($scope.data);
            $scope.id= $scope.data.id;

            
            $scope.duallistOption = {
                    leftContainerLabel: "Column 1",
                    rightContainerLabel: "Column 2"
                }
             
            $scope.leftscope = {
                control: null,
                values: [],
                selected: []  
            };
            
            $scope.rightscope = {
                control: null,
                values: [],
                selected: []  
            };
                
            if($scope.data) {
                var _idNode = $filter('filter')($scope.data.attributeValues, { name: '_id' })[0];
                if(_idNode){
                    //$scope.ctrlId will be used to get user selected data from report plugin
                    $scope.ctrlId = _idNode.value;
                }
                
                var _leftLbl = $filter('filter')($scope.data.attributeValues, { name: 'LeftLabel' })[0];
                if(_leftLbl){
                    $scope.duallistOption.leftContainerLabel = _leftLbl.value;
                }
                
                var _rightLbl = $filter('filter')($scope.data.attributeValues, { name: 'RightLabel' })[0];
                if(_rightLbl){
                    $scope.duallistOption.rightContainerLabel = _rightLbl.value;
                }
                //console.log($scope.ctrlId);
            }
            
            if($scope.data && $scope.data.children && $scope.data.children.length > 0) {
                //user option (static) data    
                //console.log($scope.data.children);
                $scope.leftscope.values = [];
                $scope.leftscope.values.push.apply($scope.leftscope.values, $filter('orderBy')($scope.data.children, 'position'));
                
                $scope.rightscope.values = [];
                
            } else {
                
                    // get leftscope data from report plugin
                        //........
                    //
                    //dummy data
                    $scope.leftscope.values.push({name: 'System_AHD_generated',id: 'System_AHD_generated'});
                    $scope.leftscope.values.push({name: 'System_Anonymous',id: 'System_Anonymous'});
                    $scope.leftscope.values.push({name: 'System_CASM_Admin',id: 'System_CASM_Admin'});
                    $scope.leftscope.values.push({name: 'end1',id: 'end1'});
                    $scope.leftscope.values.push({name: 'System_NSM_generated',id: 'System_NSM_generated'});
                    $scope.leftscope.values.push({name: 'Administrator',id: 'Administrator'});
                    $scope.leftscope.values.push({name: 'System_MA_User',id: 'System_MA_User'});
                    $scope.leftscope.values.push({name: 'System_SD_User',id: 'System_SD_User'});
                    
                    $scope.rightscope.values = [];
                    $scope.rightscope.values.push({name: 'System_AM_User', id: 'System_AM_User'});
                    $scope.rightscope.values.push({name: 'System_Argis_User',id: 'System_Argis_User'});
            }
            
            /**
            * @description move the selected item to the right
            */
            $scope.moveRight = function () {

                 $scope.move($scope.leftscope.selected, true, false);
                 //$scope.rightscope.selected = $scope.leftscope.selected;
                 if($scope.leftscope.selected.length > 0) {
                    $scope.rightscope.selected = [$scope.leftscope.selected[0]];
                    angular.element($scope.rightscope.control)[0].focus();
                 }
            }
            
            /**
            * @description move the selected item to the right
            */
            $scope.moveLeft = function () {

                $scope.move($scope.rightscope.selected, false, true);
                //$scope.leftscope.selected = $scope.rightscope.selected;
                if($scope.rightscope.selected.length > 0) {
                    $scope.leftscope.selected = [$scope.rightscope.selected[0]];
                    angular.element($scope.leftscope.control)[0].focus();  
                 }
            }
            
            /**
             * @description move the selected item to either right or left
             */
            $scope.move = function(records, leftToRight, rightToLeft){
                
                if(leftToRight){
                    
                    if(angular.isArray(records)) {
                        angular.forEach(records, function(rec) { 
                            
                            var selectedrec= $filter('filter')($scope.leftscope.values, { id: rec })[0];
                            var index = $scope.leftscope.values.indexOf(selectedrec);
                            $scope.leftscope.values.splice(index, 1); 
                            $scope.rightscope.values.push(selectedrec);
                        });
                    } else {
                        var index = $scope.leftscope.values.indexOf(records)[0];
                            $scope.leftscope.values.splice(index, 1); 
                            $scope.rightscope.values.push(records);
                    }

                } else if(rightToLeft){

                    if(angular.isArray(records)) {
                        angular.forEach(records, function(rec) { 
                            var selectedrec= $filter('filter')($scope.rightscope.values, { id: rec })[0];
                            var index = $scope.rightscope.values.indexOf(selectedrec);
                            $scope.rightscope.values.splice(index, 1);  
                            $scope.leftscope.values.push(selectedrec);
                        });
                    } else {
                        var index = $scope.rightscope.values.indexOf(records);
                            $scope.rightscope.values.splice(index, 1);  
                            $scope.leftscope.values.push(records);
                    }                    
                }
            }
            
            /**
            * @description move all items to the right
            */
            $scope.moveAllToRight = function () {
                
                $scope.rightscope.values.push.apply($scope.rightscope.values, $scope.leftscope.values);
                $scope.rightscope.selected = [$scope.rightscope.values[0].id];
                angular.element($scope.rightscope.control)[0].focus(); 
                
                $scope.leftscope.values = [];
                $scope.leftscope.selected = [];
            }  
            
            /**
            * @description move all items to the left
            */
            $scope.moveAllToLeft = function () {
               
                $scope.leftscope.values.push.apply($scope.leftscope.values, $scope.rightscope.values);
                $scope.leftscope.selected = [$scope.leftscope.values[0].id];
                angular.element($scope.leftscope.control)[0].focus(); 
                
                $scope.rightscope.values = [];
                $scope.rightscope.selected = [];
            }
        }
    }

})(window.angular);