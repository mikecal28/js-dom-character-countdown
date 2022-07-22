/* 
Character Countdown

- Input that disables itself after a set character limit (15)
- label that reflects the total remaining characters
*/

const charInput = document.getElementById("char-input");
const inputLabel = document.querySelector("label");

let charCount = 0;
let charCountdown = 15;

let changeSwitch = 0;

charInput.addEventListener("keydown", (e) => {
  if (charInput.value.length < charCount) {
    charCountdown++;
    charCount--;
  } else if (charCountdown === 0) {
    charInput.disabled = true;
  } else if (e.key !== "Backspace") {
    changeSwitch = 1;
  } else if (charCountdown !== 15) {
    charCount--;
    charCountdown++;
  }
  inputLabel.innerText = charCountdown;
});

charInput.addEventListener("keyup", (e) => {
  if (charCountdown === 0) {
    charInput.disabled = true;
  }
});

charInput.addEventListener("keypress", (e) => {
  if (changeSwitch === 1) {
    charCount++;
    charCountdown--;
    changeSwitch = 0;
  }
  inputLabel.innerText = charCountdown;
});
