//--------- Variable declarations  ---------//

let greyValue = 200;
let gridColor = "black";
let gridElements = "";
let isMouseDown = false;
let isColorButtonActive = false;
let isRainbowButtonActive = false;
let isGreyButtonActive = false;




//--------- Functions declaration  ---------//

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
  setGridElements();
}

function setGridElements(){
  gridElements = document.querySelectorAll(".grid-element");
  gridElements.forEach((element) => {
    element.addEventListener("mousedown", (event) => {
      if(isRainbowButtonActive == true){
        gridColor = createRGB();
      }
      else if(isGreyButtonActive == true){
        gridColor = createGreyScale();
        if(greyValue > 0){
          greyValue = greyValue - 20;
        }
      }
      // highlight the mouseover target
      event.target.style.background = `${gridColor}`;
      isMouseDown = true;
      event.preventDefault();
    });
  
    element.addEventListener("mouseover", (event) => {
      if(isMouseDown) {
        if(isRainbowButtonActive == true){
          gridColor = createRGB();
        }
        else if(isGreyButtonActive == true){
          gridColor = createGreyScale();
          if(greyValue > 0){
            greyValue = greyValue - 20;
          }
        }
        event.target.style.background = `${gridColor}`;
      }
    });
  
    element.addEventListener("mouseup", () => {
      isMouseDown = false;
      greyValue = 200;
    });
  });
}

// Create RGB random color
function createRGB(){
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  return ("#" + randomColor);
}
// Create Grey scale
function createGreyScale(){
  return `rgb(${greyValue},${greyValue},${greyValue})`;
}




//--------- Query Selectors ---------//

const slider = document.querySelector("#slider");
const gridContainer = document.querySelector("#grid-container");
const buttons = document.querySelectorAll("button");
const colorPalette = document.querySelector("#color-palette");
const colorButton = document.querySelector("#color");
const rainbowButton = document.querySelector("#rainbow");
const eraseButton = document.querySelector("#erase");
const greyButton = document.querySelector("#grey");




//--------- Set default values ---------//

const defaultSliderValue = slider.value;
setSliderValue(defaultSliderValue);
updateGridTable(defaultSliderValue);




// --------- Event listeners ---------//

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
      isColorButtonActive = true;
      isRainbowButtonActive = false;
      isGreyButtonActive = false;
      gridColor = colorPalette.value;
      button.setAttribute("style", "background-color: #dfd3c3");
      rainbowButton.removeAttribute("style");
      eraseButton.removeAttribute("style");
      greyButton.removeAttribute("style");
    }
    else if(button.id == "rainbow"){
      isColorButtonActive = false;
      isRainbowButtonActive = true;
      isGreyButtonActive = false;
      button.setAttribute("style", "background-color: #dfd3c3");
      colorButton.removeAttribute("style");
      eraseButton.removeAttribute("style");
      greyButton.removeAttribute("style");
    }
    else if(button.id == "grey"){
      isColorButtonActive = false;
      isRainbowButtonActive = false;
      isGreyButtonActive = true;
      button.setAttribute("style", "background-color: #dfd3c3");
      colorButton.removeAttribute("style");
      rainbowButton.removeAttribute("style");
      eraseButton.removeAttribute("style");
    }
    else if(button.id == "erase"){
      isColorButtonActive = false;
      isRainbowButtonActive = false;
      isGreyButtonActive = false;
      gridColor = "";
      button.setAttribute("style", "background-color: #dfd3c3");
      colorButton.removeAttribute("style");
      rainbowButton.removeAttribute("style");
      greyButton.removeAttribute("style");
    }
    else if(button.id == "clear-all"){
      isColorButtonActive = false;
      isRainbowButtonActive = false;
      isGreyButtonActive = false;
      updateGridTable(slider.value);
      gridColor = "black";
      colorButton.removeAttribute("style");
      rainbowButton.removeAttribute("style");
      greyButton.removeAttribute("style");
      eraseButton.removeAttribute("style");
    }
  })
});