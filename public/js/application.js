(function(globals){
  'use strict';

  var application = angular.module( 'application', ['ngRoute','ngResource'] );
  
  application.config( ['$routeProvider', '$resourceProvider', function($routeProvider, $resourceProvider){
    $routeProvider.when( '/', {
      templateUrl : 'view/home.html',
      controller  : 'HomeController',
      label       : 'Home',
    });

     $routeProvider.when( '/about', {
      templateUrl : 'view/about.html',
      controller  : 'AboutController',
      label       : 'About'
    });

     $routeProvider.when( '/projects', {
      templateUrl : 'view/projects.html',
      controller  : 'ProjectsController',
      label       : 'Projects'
    });

     $routeProvider.when( '/contact', {
      templateUrl : 'view/contacts.html',
      controller  : 'ContactController',
      label       : 'Contacts'
    });

    $routeProvider.otherwise({
      redirectTo : '/'
    });
  }]);



  application.run(['$rootScope',function($rootScope){

    var NAVIGATION_CLASS = {
      'ACTIVE'   : 'blog-nav-item active',
      'INACTIVE' : 'blog-nav-item'
    };

    $rootScope.navigation = {
      'home'     : NAVIGATION_CLASS.INACTIVE,
      'about'    : NAVIGATION_CLASS.INACTIVE,
      'projects' : NAVIGATION_CLASS.INACTIVE,
      'contact'  : NAVIGATION_CLASS.INACTIVE,
    }

    $rootScope.$on('$locationChangeStart', function(event, next, current) {
      var current = current.split('/');
      var next = next.split('/');
      
      current = current[current.indexOf('#')+1];
      next = next[next.indexOf('#')+1];
      if(!current){
        current = "home";
        $rootScope.title = "tang's | home";
      }
      if(!next){
        next = "home";
        $rootScope.title = "tang's | home";
      }
      $rootScope.title = "tangs | " + next; 
      $rootScope.navigation[current] = NAVIGATION_CLASS.INACTIVE;
      $rootScope.navigation[next   ] = NAVIGATION_CLASS.ACTIVE;
    });
  }]);
  
}(this));