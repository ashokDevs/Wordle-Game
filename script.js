const ANSWER = ["t", "a", "t", "t", "y"];
const submitBtn = document.querySelector("#submit");
const body = document.querySelector("body");
const rows = document.querySelectorAll(".row");
const cells = document.querySelectorAll(".cell");
console.log(cells);
let earray = [];
let values;
let e;
let a = 0;
let j = 0;

let i = 0;
window.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    CheckAnswer();
  }
});
submitBtn.addEventListener("click", CheckAnswer);
function CheckAnswer() {
  earray.splice(0, earray.length);
  n = 0;
  rows.forEach((row) => {
    e = row.childNodes;
    for (let k = 0; k < e.length; k++) {
      if (k % 2 != 0) {
        values = e[k].childNodes;
        values.forEach((thing) => {
          let valueee = thing.value;
          earray.push(valueee);
        });
      }
    }
  });

  a = a + 5;
  convertJ();
  while (j < a) {
    cells[j].classList.add("animate");
    let x = cells[j].childNodes;
    console.log(x[0]);
    x[0].classList.add("notAnimate");
    if (earray[j] == ANSWER[i]) {
      x[0].style.backgroundColor = "#e8a87c";
    } else if (ANSWER.includes(earray[j])) {
      x[0].style.backgroundColor = "#c38d93";
    }
    j = j + 1;
    i = i + 1;
    if (i > 4) {
      i = 0;
    }
  }
}

function convertJ() {
  switch (a) {
    case 5:
      j = 0;
      break;
    case 10:
      j = 5;
      break;
    case 15:
      j = 10;
      break;
    case 20:
      j = 15;
      break;
    case 25:
      j = 20;
      break;
    case 30:
      j = 25;
      break;

    default:
      break;
  }
}
