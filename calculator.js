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
      } else if(n == "<"){
        deleteCharacter();
      } else if (n == "=") {
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
  document.form.value.value = "";
}
function deleteCharacter(){
  let back = document.form.value.value;
  let new1 = back.substring(0,back.length-1);
  document.getElementById("value").value = new1;
}
function calculate(){
  let result = eval(document.form.value.value);
  if (result == "Infinity"){
    document.form.value.value = "We can't divide by zero"
  }else {
    document.form.value.value = result;
  }
}
function validateSign(n){
  let back = document.form.value.value;
  if(back != ""){
    document.getElementById("value").value = back + n;
    string = document.getElementById("value").value;

    let record = 0;
    let equal = 1;
    for (var a = 1; a < string.length; a++) {
      if(string.charAt(a) == "+" ||
      string.charAt(a) == "-" ||
      string.charAt(a) == "*" ||
      string.charAt(a) == "." ||
      string.charAt(a) == "/") {
        equal++;
      } else {
        if (equal > record) {
          record = equal;
        } else {
          equal = 1;
        }
      }
      if (equal > record){
        record = equal
      }
      if(record > 2) {
        var number = string.substring(0,string.length-1);
        document.getElementById("value").value = number;
        record = 0; equal = 1;
      }
    }
  }
}
function back(n){
  let back = document.form.value.value;
  let new1 = back+n;
  document.getElementById("value").value=new1;
}
