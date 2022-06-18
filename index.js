function start() {
  let firstAnswer = window.prompt("Do you head left, or right?");
  if (firstAnswer === "left") {
    goLeft();
  } else if (firstAnswer === "right") {
    goRight();
  }
}

function goLeft() {
  let secondAnswer = window.prompt(`You come across a stray cat. 
    It scampers off down a small hole, just large enough for you to crawl through. 
    Do you follow it, or continue on your path?`);
  switch (secondAnswer) {
    case "back":
      start();
      break;
  }
}

function goRight() {
  let secondAnswer = window.prompt(`You come across a snoring dragon. 
    On the other side of him, you see a shiny chest of treasure. Another path would 
    lead you away from the dragon all together. Which do you take?`);
  switch (secondAnswer) {
    case "back":
      start();
      break;
  }
}

start();
