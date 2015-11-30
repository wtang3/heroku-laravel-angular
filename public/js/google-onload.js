(function(globals){
  'use strict';

  function On_Document_Ready(Callback) {
    if (document.readyState === "complete"){
      window.setTimeout(Callback, 0);
      console.log("loaded");
    } else {
      window.addEventListener("load", Callback, false);
      console.log("callback");
    }
  }

  function init(){
    window.___gcfg = {
      lang: 'en',
      parsetags: 'onload'
    };
      
      var po = document.createElement('script'); 
      po.type = 'text/javascript'; 
      po.async = false;
      po.src = 'https://apis.google.com/js/plusone.js';
      var s = document.getElementsByTagName('script')[0];
      s.setAttribute('id', 'googleapi'); 
      s.parentNode.insertBefore(po, s);
    console.log("loaded");
  }

 On_Document_Ready(init);
}(this));
