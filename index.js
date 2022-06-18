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
    case "follow":
      follow();
      break;
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

function follow() {
  let thirdAnswer = window.prompt(
    "You follow the cat to a colony of cats, snuggled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven."
  );
  switch (thirdAnswer) {
    case "stay":
      window.alert(
        "You live happily amongst the cats for the rest of your days."
      );
      break;
    case "spread the word":
      window.alert(
        "After leaving the cat colony, you are never able to find it again. Without proof, no one believes your story, which passes into legend nonetheless."
      );
      break;
    case "back":
      goLeft();
      break;
  }
}
start();
