(function( globals ) {
  'use strict';
  
  var application = angular.module( 'application' );
  
  application.controller( 'ContactController', ['$scope', function($scope) {
    var username = "tangwill.12";
    var hostname = "gmail.com";
    var link = username + "@" + hostname;
    globals.scope = $scope;
    $scope.interwebz = "";
    $scope.test = "";

    $scope.interwebz = link;
    $scope.test ="test";
  }]);
  
}(this));