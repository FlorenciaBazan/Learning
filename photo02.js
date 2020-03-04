window.onload = function() {
  var photos = document.querySelector("div")
  //Listener
  photos.addEventListener("click",function(e){
    if (e.target.tagName === "IMG"){
      console.log("I press an image");
    } else {
      console.log("I don't press an image");
    }
  }, false);
}
