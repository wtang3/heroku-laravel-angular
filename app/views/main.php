<!DOCTYPE HTML>
<html lang="en" ng-app="application" class="no-js">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <meta http-equiv="MSThemeCompatible" Content="No"/>
    <meta name="MSSmartTagsPreventParsing" content="true"/>
    <meta http-equiv="imagetoolbar" content="no"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="keywords" content="William Tang, Georgia State University, Computer Science"/>
    <meta name="description" content= "William Tang - Georgia State Student, College of Arts and Science"/>
    <meta name="author" content= "William Tang"/>
    <link rel="stylesheet" href="css/bootstrap-3.1.1-dist/bootstrap.min.css">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/about.css">
    <link rel="stylesheet" href="css/contacts.css">
    <link rel="stylesheet" href="css/mobile.css">
    <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon"/>
    <title>{{title}}</title>
  </head>
  <body>
    <div class="blog-masthead">
      <div class="container">
        <nav class="blog-nav">
          <a class="{{navigation.home}}"     href="#/">Home</a>
          <a class="{{navigation.about}}"    href="#/about">About</a>
          <a class="{{navigation.projects}}" href="#/projects">Projects</a>
          <a class="{{navigation.contact}}"  href="#/contact">Contact</a>
        </nav>
      </div>
    </div>
    <div class="col-lg-8 col-md-offset-2"> 
      <div id="header-style">
        <div class="container" ng-view>
        </div>
      </div>
    </div>
    <script src="js/angular/angular.min.js"></script>
    <script src="js/angular/angular-route.min.js"></script>
    <script src="js/angular/angular-resource.min.js"></script>
    <script src="js/application.js"></script>
    <script src="js/services/services.js"></script> 
    <script src="js/controllers/home.js"></script>
    <script src="js/controllers/about.js"></script>
    <script src="js/controllers/projects.js"></script>
    <script src="js/controllers/contact.js"></script>
  </body>
</html>