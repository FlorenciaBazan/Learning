window.onload = function() {
  var photos = document.querySelector("div")
  //Listener
  photos.addEventListener("click",function(e){
    if (e.target.tagName === "IMG"){
      var blackBackground = document.createElement("div");
      blackBackground.id = "overlay";
      document.body.appendChild(blackBackground);

      //Give style to the background
      blackBackground.style.position = "absolute";
      blackBackground.style.top = 0;
      blackBackground.style.background= "rgba(0,0,0,0.5)";
      blackBackground.style.cursor = "pointer";

      //
      blackBackground.style.width = window.innerWidth+"px";
      blackBackground.style.height = window.innerHeight+"px";
      blackBackground.style.top = window.pageYOffset+"px";
      blackBackground.style.left = window.pageXOffset+"px";

      //create image
      var smallFile = e.target.src;

      var file = smallFile.substr(smallFile.length-10, 10);

      var bigImage = "fondos/"+file;

      var image = document.createElement("img");
      image.id = "image";
      image.src = bigImage;
      image.style.display = "block";
      image.style.position = "absolute";

      image.addEventListener("load", function(){
        blackBackground.appendChild(image);
      },false);

    } else {
      console.log("I didn't press an image");
    }
  }, false);
}
