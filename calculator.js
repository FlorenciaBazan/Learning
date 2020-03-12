window.onload = function(){
  var signs = "+-*/";
  var x = new Array();
  document.getElementById("value").onkeypress = function(event){
    return numbers(event);
  }
  x = document.querySelectorAll("input[type=button]");
  for (var i = 0; i < x.length; i++){
    x[i].onclick = function(){
      let n = this.value;
      if (n=="C"){
        deleteF();
      } else if(n=="<"){
        deleteCharacter();
      } else if (n=="=") {
        calculate();
      } else if (signs.indexOf(n)>-1){
        validateSign(n);
      } else {
        back(n);
      }
    }
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
function deleteF(){
  console.log("delete");
}
function deleteCharacter(){
  console.log("delete character");
}
function calculate(){
  console.log("calculate")
}
function validateSign(n){
  console.log("validateSign");
}
function back(n){
  console.log("return number");
}
