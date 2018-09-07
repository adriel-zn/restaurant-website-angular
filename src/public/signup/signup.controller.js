(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'MyInfoService', '$location', '$timeout'];
function SignUpController(MenuService, MyInfoService, $location, $timeout) {
  var $ctrl = this;
   $ctrl.founded = false;
  $ctrl.info = {};
  $ctrl.submit = function() {
	  MenuService.getMenuItem($ctrl.info.favorite)
        .then(function(response) {
          $ctrl.invalidFavorite = false;
          $ctrl.submitted = true;
          MyInfoService.setInfo($ctrl.info);
		  $timeout(function(){
			  $location.path('/');
		  },2000);
        })
        .catch(function() {
          $ctrl.invalidFavorite = true;
        });


    }

  };


})();
