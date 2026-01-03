const ANSWER = ["t", "a", "t", "t", "y"];
const submitBtn = document.querySelector("#submit");
const body = document.querySelector("body");
const rows = document.querySelectorAll(".row");
const cells = document.querySelectorAll(".cell");

let earray = [];
let values;
let e;
let a = 0;
let j = 0;
let i = 0;

window.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    checkAnswer();
  }
});

submitBtn.addEventListener("click", checkAnswer);

function checkAnswer() {
  earray.splice(0, earray.length);
  let n = 0;
  rows.forEach((row) => {
    e = row.childNodes;
    for (let k = 0; k < e.length; k++) {
      if (k % 2 !== 0) {
        values = e[k].childNodes;
        values.forEach((thing) => {
          let value = thing.value;
          earray.push(value);
        });
      }
    }
  });

  a += 5;
  convertJ();
  while (j < a) {
    cells[j].classList.add("animate");
    let x = cells[j].childNodes;
    x[0].classList.add("notAnimate");
    if (earray[j] === ANSWER[i]) {
      x[0].style.backgroundColor = "#e8a87c";
    } else if (ANSWER.includes(earray[j])) {
      x[0].style.backgroundColor = "#c38d93";
    }
    j++;
    i = (i + 1) % ANSWER.length;
  }
}

function convertJ() {
  j = (a / 5) * 5;
}