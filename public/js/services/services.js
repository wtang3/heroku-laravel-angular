(function( globals ){
 'use strict';
 
 var GOOGLEAPI_URL = "https://www.googleapis.com/plus/v1/people/117902654629859382535/activities/public";
 var PUBLIC_KEY = "Public_Key"
 var application = angular.module( 'application' );

 application.factory("GoogleServices", ['$resource', function ($resource) {
   var publicApi = {
     Id           : undefined,
     publicObject : undefined,
     init         : undefined,
     status       : undefined
   };

   publicApi.Id = $resource(GOOGLEAPI_URL, {key: PUBLIC_KEY});

   publicApi.publicObject = function(){
     return publicApi.Id;
   }

   publicApi.status = function(){
    return publicApi;
   }

   publicApi.init = function(){
    var gaqElement = document.getElementById("googleapi_gaq");
    window.___gcfg = {
      lang: 'en',
      parsetags: 'onload'
    };

    if(!gaqElement){
      var po = document.createElement('script'); 
      po.type = 'text/javascript';
      po.setAttribute('id', 'googleapi_gaq'); 
      po.async = true;
      po.src = 'https://apis.google.com/js/plusone.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(po, s);
    }else{
      var node = document.getElementById('googleapi_gaq');
      document.body.removeChild(node);
      var mo = document.createElement('script'); 
      mo.type = 'text/javascript';
      mo.setAttribute('id', 'googleapi_gaq');
      mo.async = true; 
      mo.src = 'https://apis.google.com/js/plusone.js';
      var s2 = document.getElementsByTagName('script')[0];
      s2.setAttribute('id','gapi_loaded'); 
      s2.parentNode.insertBefore(mo, s2);
    }
   }
   return publicApi;
 }
]);
 
}(this));
