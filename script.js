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


// Set initial declaration
let isMouseDown = false;

const slider = document.querySelector("#slider");
const gridContainer = document.querySelector("#grid-container");

const defaultSliderValue = slider.value;
setSliderValue(defaultSliderValue);
updateGridTable(defaultSliderValue);


// Event listener for slider
slider.addEventListener("input", () => {
  setSliderValue(slider.value);
  updateGridTable(slider.value);
});


// Event listener for mouse down, mouse move and mouse up
gridContainer.addEventListener("mousedown", (event) => {
  // highlight the mouseover target
  event.target.style.background = "orange";
  isMouseDown = true;
});


gridContainer.addEventListener('mousemove', (event) => {
  if (isMouseDown) {
    event.target.style.background = "orange";
  }
});

gridContainer.addEventListener('mouseup', (event) => {
    isMouseDown = false;
});






