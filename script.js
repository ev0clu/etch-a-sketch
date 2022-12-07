// --------- Functions declaration --------- //

// Set the slider value to the default value is set at the index.html file
function setDefaultValue(){
  const defaultValue = document.querySelector(".slider-value");
  defaultValue.textContent = `${slider.value} x ${slider.value}`;

  const defaultContent = document.createElement("div");
  defaultContent.setAttribute("class", "square");
  defaultContent.setAttribute("id", `square${slider.value}`);
  /*defaultContent.classList.add(`square${slider.value}`);*/
  defaultContent.textContent = "1";

  gridContainer.appendChild(defaultContent);

}

// Set grid table according to the slider setting
function setGridTable(value){
  gridContainer.textContent = "";
  const newGrid = value * value;
  for(let i=0; i<newGrid; i++){
    const addContent = document.createElement("div");
    addContent.setAttribute("class", "square");
    addContent.setAttribute("id", `square${slider.value}`);
    gridContainer.setAttribute("style", `grid-template-columns: repeat(${value}, ${600/value}px); grid-template-rows: repeat(${value}, ${600/value}px)`);
    addContent.classList.add(`square${++gridValue}`);
    addContent.textContent = "5";
    gridContainer.appendChild(addContent);
  }
  
}


const slider = document.querySelector("#slider");
const gridContainer = document.querySelector("#grid-container");
let gridValue = slider.value;
setGridTable(16);



slider.addEventListener("input", () => {
  const sliderValue = document.querySelector(".slider-value");
  sliderValue.textContent = `${slider.value} x ${slider.value}`;
  
  setGridTable(slider.value);
});





