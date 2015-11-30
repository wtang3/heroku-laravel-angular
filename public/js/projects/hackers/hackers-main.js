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

  function ajaxGetJson(url){

    var storyObject = {
      response : undefined
    }

    var ajax_req = new XMLHttpRequest();
    ajax_req.open("GET",url,false); //setting it to be synchronous kinda bad.
    ajax_req.setRequestHeader("Content-type","application/json");
    
    ajax_req.onreadystatechange = function(){
      if(ajax_req.readyState == 4 && ajax_req.status == 200){
        var promise = JSON.parse(ajax_req.responseText);
        storyObject.response = promise
      }else{
        console.log("waiting for json");
      }
    }
    ajax_req.send();
    return storyObject.response;
  }

  function simulateTyping(){
    var response = ajaxGetJson("js/projects/hackers/json/hackers.json");
    var id = document.getElementById('temp');
    id.innerHTML = response.intro.title;
  }
 
  function init(){
    simulateTyping();
  }
  On_Document_Ready(init);
}(this));
