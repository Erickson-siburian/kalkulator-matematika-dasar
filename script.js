const input = document.getElementById("input");

function addToInput(val) {
  input.value += val;
}

function backspace() {
  input.value = input.value.slice(0, -1);
}

function clearInput() {
  input.value = "";
}

function calculate() {
  let inputVal = input.value;
  let outputVal = eval(inputVal);
  input.value = outputVal;
}
