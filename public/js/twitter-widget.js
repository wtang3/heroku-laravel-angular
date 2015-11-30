(function(globals){
  'use strict';

  function On_Document_Ready(Callback) {
    if (document.readyState === "complete"){
      window.setTimeout(Callback, 0);
    } else {
      window.addEventListener("load", Callback, false);
    }
  }

  function init(){
    window.twttr = (function (d, s, id){
      var t, js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id; js.src= "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);
      return window.twttr || (t = { _e: [], ready: function (f) { t._e.push(f) } });
    }(document, "script", "twitter-wjs"));
  }
  
  if("twitter-wjs" != undefined) {
    //$("twitter-wjs");
    //twitter.remove();
    console.log(document);
    console.log("true");
    //On_Document_Ready(init);
  }else{
    console.log("else");
    //On_Document_Ready(init);
  } 
 On_Document_Ready(init);
}(this));

