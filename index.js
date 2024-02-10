let colorPickerContainerEl = document.getElementById("colorPickerContainer");
let selectedColorHexCode = document.getElementById("selectedColorHexCode");
let button1El = document.getElementById("button1");
let button2El = document.getElementById("button2");
let button3El = document.getElementById("button3");
let button4El = document.getElementById("button4");

function changetowhite() {
  colorPickerContainerEl.style.backgroundColor = "#e0e0e0";
  selectedColorHexCode.textContent = "#e0e0e0";
  selectedColorHexCode.style.color = "#49a6e9";
  button1El.style.backgroundColor = "#e0e0e0";
}

function changetogreen() {
  colorPickerContainerEl.style.backgroundColor = "#6fcf97";
  selectedColorHexCode.textContent = "#6fcf97";
  selectedColorHexCode.style.color = "#49a6e9";
  button2El.style.backgroundColor = "#6fcf97";
}

function changetoblue() {
  colorPickerContainerEl.style.backgroundColor = "#56ccf2";
  selectedColorHexCode.textContent = "#56ccf2";
  selectedColorHexCode.style.color = "#49a6e9";
  button3El.style.backgroundColor = "#56ccf2";
}

function changetoviolet() {
  colorPickerContainerEl.style.backgroundColor = "#bb6bd9";
  selectedColorHexCode.textContent = "#bb6bd9";
  selectedColorHexCode.style.color = "#49a6e9";
  button4El.style.backgroundColor = "#bb6bd9";
}
