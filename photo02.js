window.onload = function() {
  var photos = document.querySelector("div")
  //Listener
  photos.addEventListener("click",function(e){
    if (e.target.tagName === "IMG"){
      console.log("I pressed an image");
    } else {
      console.log("I didn't press an image");
    }
  }, false);
}
