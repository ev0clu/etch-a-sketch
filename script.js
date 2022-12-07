// --------- Functions declaration --------- //

// Set the slider value to the default value is set at the index.html file
function setDefaultValue(){
  const defaultValue = document.querySelector(".slider-value");
  defaultValue.textContent = `${slider.value} x ${slider.value}`;

  const defaultContent = document.createElement("div");
  defaultContent.classList.add(`square${slider.value}`);
  defaultContent.textContent = "1";

  gridContainer.appendChild(defaultContent);

}

function setGridTable(value){
  if(value>gridValue){
    const positiveDiff = value-gridValue;
    for(let i=0; i<positiveDiff; i++){
      const addContent = document.createElement("div");
      addContent.classList.add(`square${++gridValue}`);
      addContent.textContent = "5";
      gridContainer.appendChild(addContent);
    }
    gridValue = value;
  }
  else if(value<gridValue){
    const negativeDiff = gridValue-value;
    for(let i=0; i<negativeDiff; i++){
      const removeContent = document.querySelector(`.square${gridValue--}`);
      removeContent.remove();
    }
    gridValue = value;
  } 
}


const slider = document.querySelector("#slider");
const gridContainer = document.querySelector("#grid-container");
let gridValue = slider.value;
setDefaultValue();



slider.addEventListener("input", () => {
  const sliderValue = document.querySelector(".slider-value");
  sliderValue.textContent = `${slider.value} x ${slider.value}`;
  
  setGridTable(slider.value);
});





