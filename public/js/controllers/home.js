(function( globals ){
  'use strict';
  
  var application = angular.module('application');
  
  application.controller( 'HomeController', ['$scope','GoogleServices', 
    function($scope,GoogleServices){ 
      globals.scope  = $scope;
      $scope.service = undefined;
      $scope.items   = undefined;
      var isIe       = undefined;
      var results    = undefined;
      var dataObject = {
        Items : undefined
      }

      function corsSupport(){
        var corsSupported = undefined;
        var xdrSupported  = undefined;
        var noSupport     = undefined;
        //Detect browser support for CORS
        if('withCredentials' in new XMLHttpRequest()){
          /* supports cross-domain requests */
          corsSupported = "corsSupported";
          return corsSupported;
        }
        else if(typeof XDomainRequest !== "undefined"){
          //Use IE-specific "CORS" code with XDR
          xdrSupported = "xdrSupported";
          return xdrSupported
        }else{
          noSupport = "noSupport";
          return noSupport;
        }
        return null;
      }

      function errorSpitnp(support){
        var browser     = browserID(undefined,1337);
        var error = document.getElementById('error');

        if(browser === null){
          browser = navigator.userAgent;
          console.info(browser);
        }
        error.innerHTML = '<p>Doh! I apologize, but something bad happened see error logs below.</p>'+
        '<img id="dohcors" src = "http://fcdn.mtbr.com/attachments/car-biker/464984d1245694391-just-got-roof-rack-my-mazda-3-have-some-questions-homer-doh.jpg"/>'+
        '<hr>'+
        '<u><h4>Error Logs:</h4></u>'+
        'Description: ' +support +
        '<p id="errorDesc">To remdiate this you could either try upgrading your current browser ('+
          browser+') version or try another different browser.</p>';
      }

      function errorSpit(err){
        var description = err.description;
        var message     = err.message;
        var name        = err.name;
        var number      = err.number;
        var browser     = browserID(undefined,1337);
        var error = document.getElementById('error');

        if(browser === null){
          browser = navigator.userAgent;
          console.info(browser);
        }
        error.innerHTML = '<p>Doh! I apologize, but something bad happened see error logs below.</p>'+
        '<img id="dohcors" src = "http://fcdn.mtbr.com/attachments/car-biker/464984d1245694391-just-got-roof-rack-my-mazda-3-have-some-questions-homer-doh.jpg"/>'+
        '<hr>'+
        '<u><h4>Error Logs:</h4></u>'+
         '<p id="errorLog">Description: '+description+"<br>Message: "+err.message+"<br>Name: "+err.name+"<br>Number: "+err.number+
         '</p>'+'<p id="errorDesc">To remdiate this you could either try upgrading your current browser ('+
          browser+') version or try another different browser.</p>';
      }

      function browserID(userAgent, elements) {
        var regexps = {
          'Chrome': [ /Chrome\/(\S+)/ ],
          'Firefox': [ /Firefox\/(\S+)/ ],
          'MSIE': [ /MSIE (\S+);/ ],
          'Opera': [
            /Opera\/.*?Version\/(\S+)/, /* Opera 10 */
            /Opera\/(\S+)/              /* Opera 9 and older */
           ],
          'Safari': [ /Version\/(\S+).*?Safari\// ]
        },re, m, browser, version;
     
        if(userAgent === undefined){
          userAgent = navigator.userAgent;
        }
        if(elements === undefined){
            elements = 2;
        }else if(elements === 0){
            elements = 1337;
        }

        for (browser in regexps)
          while (re = regexps[browser].shift()){
            if (m=userAgent.match(re)){
              version = (m[1].match(new RegExp('[^.]+(?:\.[^.]+){0,' + --elements + '}')))[0];
              return browser + ' ' + version;
            }
          }
        return navigator.userAgent;
      } 
      
      
      results = corsSupport();
      console.log(results);
      if(corsSupport() === "xdrSupported"){
        errorSpitnp(results);
        console.log("xdrSupported");
      }else if(corsSupport === "noSupport"){
        errorSpitnp(results);
      }else{
        GoogleServices.publicObject().get(function(data){
          var string ="";
          dataObject.Items = data.items;
          $scope.items = dataObject.Items;
          console.info("From navigator: "+navigator.userAgent);
          console.info("From function: "+browserID(undefined,1337));
          //Inject googleapi script
          GoogleServices.init();
        },
        function(err){
          errorSpit(err);
          console.error('request failed');
          console.info(navigator.userAgent);
          console.info(browserID(undefined,1337));
        }
      );}
  }]);
}(this));