var button_list = document.querySelectorAll(".drum");
for (var i = 0; i < button_list.length; i++) {
  button_list[i].addEventListener("click", function() {
    playSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  console.log(event);
  playSound(event.key);
  buttonAnimation(event.key);
})

function playSound(letter) {
  var audio;
  switch (letter) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "k":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:

  }
}

function buttonAnimation(letter) {
  var activeButton = document.querySelector("." + letter);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}


// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
