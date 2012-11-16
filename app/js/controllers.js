'use strict';

/* Controllers */

function LoginCtrl($scope) {

  $scope.isSubmitDisabled = function() {
    return $scope.loginForm.$invalid
  };

  $scope.resetForm = function() {
    $scope.user = {
      email : "",
      password : ""
    };
  };
}

function SignupCtrl($scope) {

  $scope.isSubmitDisabled = function() {
    return $scope.signupForm.$invalid
  };

  $scope.resetForm = function() {
    $scope.user = {
      fullName : "",
      email : "",
      password : "",
      passwordConfirmation : ""
    };
  };
}


// MyCtrl1.$inject = [];

