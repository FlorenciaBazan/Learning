var cards = new Array(
  {name: '1', select: false},
  {name: '2', select: false},
  {name: '3', select: false},
  {name: '4', select: false},
  {name: '5', select: false},
  {name: '6', select: false},
  {name: '7', select: false},
  {name: '8', select: false},
  {name: '9', select: false},
  {name: '10', select: false},
  {name: '11', select: false},
  {name: '12', select: false},
  {name: '13', select: false},
  {name: '14', select: false},
  {name: '15', select: false},
  {name: '16', select: false}
  )

  var tries = 0;
  var play1 = play2 = "";
  var play1Id = play2Id = "";
  var tokens = 16;

  window.onload = function() {
    document.getElementById("start").onclick = startGame;
    for(var i = 0; i < tokens; i++) {
      document.getElementById(i.toString()).onclick = turnCard;
    }
  }

  function startGame() {
    var board = document.getElementById("game");
    board.style.opacity = 1;

    cards.sort(function(){return Math.random() - 0.5});

    for(var i = 0; i < tokens; i++) {
      var card = cards[i].name;
      var data = document.getElementById(i.toString());
      data.dataset.value = card;
      console.log(data.dataset.value);
    }
  }

  function turnCard() {
    var event = window.event;
    play2 = event.target.dataset.value;
    play2Id = event.target.id;
    if (play1 !== ""){

      if (play1 === play2 &&
        cards[parseInt(play2Id).select] != true &&
        cards[parseInt(play1Id).select] != true
        ) {
          cards[parseInt(play2Id).select] = true;
          cards[parseInt(play1Id).select] = true;

          changeColor(play2Id, "blue", play2);
        } else {

          changeColor(play2Id, "blue", play2);
        }

      }else if (play2 !== "void"){
        changeColor(play2Id, "blue", play2);
        play1 = play2;
        play1Id = play2Id;
      }
    }
    function changeColor(position, color, number){
      document.getElementById(position.toString()).style.backgroundColor = color;
      document.getElementById(position.toString()).innerHTML = number;
    }