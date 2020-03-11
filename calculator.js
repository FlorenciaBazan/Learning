window.onload = function(){
  document.getElementById("value").onkeypress = function(event){
    return numbers(event);
  }
}

function numbers(e){
  let key = e.keyCode;
  let keyboard = String.fromCharCode(key);
  let specials = new Array();
  specials["backspace"] = 8;
  specials["left"] = 37;
  specials["right"] = 39;
  let flag = false;
  let numbers = "0123456789.";

  flag = specials.includes("key");

  if(numbers.indexOf(keyboard)==-1 && flag==false){
    return false;
  }

}
