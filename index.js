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
    case "continue":
      continueThrough();
      break;
    default:
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
    default:
      goLeft();
      break;
  }
}

function continueThrough() {
  let thirdAnswer = window.prompt(
    "You come across a chamber that extends upward to a shining light above. There is a long, winding staircase and a much quicker, but rickety-looking, ladder that lead up towards the light. Which do you take?"
  );
  switch (thirdAnswer) {
    case "ladder":
      window.alert(
        "After ascending a few feet up the ladder, one of its rungs snaps and you fall comedically through each of the rungs below. Sheepish, you return home."
      );
      break;
    case "staircase":
      window.alert(
        "After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever."
      );
      break;
    default:
      goLeft();
      break;
  }
}
start();
