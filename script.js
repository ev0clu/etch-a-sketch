// --------- Functions declaration --------- //


function setSliderValue(value){
  const sliderValue = document.querySelector(".slider-value");
  sliderValue.textContent = `${value} x ${value}`;
}

// Set grid table according to the slider setting
function updateGridTable(value){
  gridContainer.textContent = "";
  const newGrid = value * value;
  for(let i=1; i<=newGrid; i++){
    const addContent = document.createElement("div");
    addContent.setAttribute("class", "grid-element");
    gridContainer.setAttribute("style", `grid-template-columns: repeat(${value}, 1fr); grid-template-rows: repeat(${value}, 1fr)`);
    gridContainer.appendChild(addContent);
  }
}

function createRGB(){
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  return ("#" + randomColor);
}


// Set initial declaration
let isMouseDown = false;
let gridColor = "black";
let isColorButtonActive = false;

const slider = document.querySelector("#slider");
const gridContainer = document.querySelector("#grid-container");
const buttons = document.querySelectorAll("button");
const colorPalette = document.querySelector("#color-palette");
const colorButton = document.querySelector("#color");
const rainbowButton = document.querySelector("#rainbow");
const eraseButton = document.querySelector("#erase");

const defaultSliderValue = slider.value;
setSliderValue(defaultSliderValue);
updateGridTable(defaultSliderValue);


// Event listener for slider
slider.addEventListener("input", () => {
  setSliderValue(slider.value);
  updateGridTable(slider.value);
});

colorPalette.addEventListener("input", () => {
  if(isColorButtonActive == true){
    gridColor = colorPalette.value;
    rainbowButton.removeAttribute("style");
    eraseButton.removeAttribute("style");
  }
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {    
    if(button.id == "color"){
      gridColor = colorPalette.value;
      button.setAttribute("style", "background-color: #dfd3c3");
      rainbowButton.removeAttribute("style");
      eraseButton.removeAttribute("style");
      isColorButtonActive = true;
    }
    else if(button.id == "rainbow"){
      button.setAttribute("style", "background-color: #dfd3c3");
      colorButton.removeAttribute("style");
      eraseButton.removeAttribute("style");
      isColorButtonActive = false;
    }
    else if(button.id == "erase"){
      gridColor = "";
      button.setAttribute("style", "background-color: #dfd3c3");
      colorButton.removeAttribute("style");
      rainbowButton.removeAttribute("style");
      isColorButtonActive = false;
    }
    else if(button.id == "clear-all"){
      updateGridTable(slider.value);
      gridColor = "black";
      colorButton.removeAttribute("style");
      rainbowButton.removeAttribute("style");
      eraseButton.removeAttribute("style");
      isColorButtonActive = false;
    }
  })
});

// Event listener for mouse down, mouse move and mouse up
gridContainer.addEventListener("mousedown", (event) => {
  // highlight the mouseover target
  event.target.style.background = `${gridColor}`;
  isMouseDown = true;
});


gridContainer.addEventListener('mousemove', (event) => {
  if (isMouseDown) {
    event.target.style.background = `${gridColor}`;
  }
});

gridContainer.addEventListener('mouseup', (event) => {
    isMouseDown = false;
});






