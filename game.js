
var randomNumber;
let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
var level = 0;
var tirosUsuario=0;
$(document).keypress(function(e) {
  tiraMaquina();
  //despues de tirar maquina vacia el arreglo del usuario

});

  //se activa el evento click que es cuando el usuario selecciona el color
  $(".btn").on("click", function(e) {
    //console.log("pase por aqui "+e.key);

    console.log("tirosUsuario BTN "+tirosUsuario);
    tiraJugador(e);
      if (tirosUsuario== gamePattern.length)
        {
          console.log("MAQUINA tirosUsuario "+tirosUsuario);
          tirosUsuario=0;
          userClickedPattern = [];
          tiraMaquina();
        }
  });


function tiraMaquina() {
    console.log("Tira Maquina ");
    level = nextSequence(level);
    //console.log("level ", level);
    //asigno el color ganador a la variable randomChosenColour
    randomChosenColour = buttonColours[randomNumber];
    //console.log("randomNumber ", randomNumber);
    //console.log("randomChosenColour ", randomChosenColour);
    //pongo el color ganador en el arreglo gamePattern
    gamePattern.push(randomChosenColour);
    console.log("gamePattern ", gamePattern);
    //crea numero aleatorio
    switch (randomChosenColour) {
      case "red":
        //$(".btn.red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $(".btn."+randomChosenColour).slideUp();
        $(".btn."+randomChosenColour).slideDown();
        playSound(randomChosenColour);
        $("h2").removeClass("inVisible");
        $("h2").addClass("visible");
        //$("h2").style.visibility = "visible";
        break;

      case "blue":
        //$(".btn.blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $(".btn."+randomChosenColour).slideUp();
        $(".btn."+randomChosenColour).slideDown();
        playSound(randomChosenColour);
        $("h2").removeClass("inVisible");
        $("h2").addClass("visible");
        //$("h2").style.visibility = "visible";
        break;

      case "green":
        //$(".btn.green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $(".btn."+randomChosenColour).slideUp();
        $(".btn."+randomChosenColour).slideDown();
        playSound(randomChosenColour);
        $("h2").removeClass("inVisible");
        $("h2").addClass("visible");
        //$("h2").style.visibility = "visible";
        break;

      case "yellow":
        //$(".btn.yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        $(".btn."+randomChosenColour).slideUp();
        $(".btn."+randomChosenColour).slideDown();
        playSound(randomChosenColour);
        $("h2").removeClass("inVisible");
        $("h2").addClass("visible");

        //$("h2").style.visibility = "visible";
          break;
      default:
    }
  }

function tiraJugador(e){
  tirosUsuario=tirosUsuario+1;
  console.log("Tira Jugador ");
  var userChosenColour;
  if ($(e.target).is(".btn.green")) { //chack if the event
    userChosenColour = "green";
    userClickedPattern.push("green");
    // $(".btn.green").slideUp();
    // $(".btn.green").slideDown();
    animatePress(userChosenColour);
    playSound(userChosenColour);
    console.log("userClickedPattern ", userClickedPattern+" tirosUsuario "+tirosUsuario+" gamePattern.length "+gamePattern.length);
    if (tirosUsuario== gamePattern.length){
      console.log("MAQUINA2 tirosUsuario "+tirosUsuario);
      checkAnswer();

    }
  } else if ($(e.target).is(".btn.red")) {
    userChosenColour = "red";
    userClickedPattern.push("red");
    animatePress(userChosenColour);
    playSound(userChosenColour);
    console.log("userClickedPattern ", userClickedPattern+" tirosUsuario "+tirosUsuario+" gamePattern.length "+gamePattern.length);
    if (tirosUsuario== gamePattern.length){
      console.log("MAQUINA2 tirosUsuario "+tirosUsuario);
      checkAnswer();
    }

  } else if ($(e.target).is(".btn.yellow")) {
    userChosenColour = "yellow";
    userClickedPattern.push("yellow");
    animatePress(userChosenColour);
    playSound(userChosenColour);
    console.log("userClickedPattern ", userClickedPattern+" tirosUsuario "+tirosUsuario+" gamePattern.length "+gamePattern.length);
    if (tirosUsuario== gamePattern.length){
      console.log("MAQUINA2 tirosUsuario "+tirosUsuario);
      checkAnswer();
    }
  } else if ($(e.target).is(".btn.blue")) {
    userChosenColour = "blue";
    userClickedPattern.push("blue");
    animatePress(userChosenColour);
    playSound(userChosenColour);
    console.log("userClickedPattern ", userClickedPattern+" tirosUsuario "+tirosUsuario+" gamePattern.length "+gamePattern.length);
    if (tirosUsuario== gamePattern.length){
      console.log("MAQUINA2 tirosUsuario "+tirosUsuario);
      checkAnswer();
    }
    //la debes de llamar hasta que tire jugador
    //TiraMaquina();
  }
}

function checkAnswer() {
  var jugadorPerdio = new Boolean(false); //aun que se ponga false siempre incia con true
  var i = 0;
  //un booleano siempre inicia como true
  while (jugadorPerdio && i < gamePattern.length)
  {
    console.log("?? gamePattern " + gamePattern[i] + " userClickedPattern " + userClickedPattern[i]+" I "+i+" gamePattern.length "+gamePattern.length);
    if (gamePattern[i] != userClickedPattern[i])
      {
      jugadorPerdio = false;
      console.log("PERDIO " + gamePattern[i] + " vs " + userClickedPattern[i]);
      $("#level-title").text("Game Over, Press Any Key to Restart");
      perdio();
      break;
      }
    i += 1;
    //console.log("i " + i + " " + gamePattern.length)

  }
  $("h2").removeClass("visible");
  $("h2").addClass("inVisible");
  //console.log("Estoy aqui");
  // if (gamePattern.length==1)
  //   {
  //   console.log("Estoy aqui 1111");
  //   TiraMaquina();
  //
  //  }
}

//Aqui se crea de manera aleatoria el color que la maquina selecciona
function nextSequence(level) {
  randomNumber = Math.floor(Math.random() * 4); //crea numero aleatorio menor a 1, //lo multiplica * 4 (para obtner numeros entre 0 y 3)//convierte el resultado a un valor entero hacia abajo ejemplo 2.6=2
  //console.log("randomNumber ", randomNumber);
  level += 1; //como vaya avanzando incrementa los numeros
  $("h1").text("Level " + level); //pone el nivel en el titulo
  return level;
}

//se activo el sonido cuando el usuario presiona una tecla
function playSound(nameColor) { //recibe como parametro el color seleccionado
  audio = new Audio("sounds/" + nameColor + ".mp3");
  audio.play();
}

//anima el botton cuando el usuario lo presiona
function animatePress(currentColour) { //recibe como parametro el color seleccionado
  $(".btn." + currentColour).addClass("pressed2"); //selecciona la clase de acuero al color
  setTimeout(function() { //remueve el color despeues de 100 milisegundos
    $(".btn." + currentColour).removeClass("pressed2");
  }, 100);
}

function perdio(){

  playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
}

function writeNext(i)
{
    //document.write(i);

    if(i == 5)
        return;

    setTimeout(function()
    {
        writeNext(i + 1);

    }, 2000);
}



function timedRefresh(timeoutPeriod) {
	setTimeout("location.reload(true);",timeoutPeriod);
}
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
