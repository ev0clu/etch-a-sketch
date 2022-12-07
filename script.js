// --------- Functions declaration --------- //

// Set the slider value to the default value is set at the index.html file
function setDefaultValue(){
  const defaultValue = document.querySelector(".slider-value");
  defaultValue.textContent = `${slider.value} x ${slider.value}`;

  const content = document.createElement("div");
  content.classList.add(`square`);
  content.textContent = "1";

  container.appendChild(content);

}

function setGridTable(value){
  for(let i=0; i<value; i++){
    const content = document.createElement("div");
    content.classList.add(`square`);
    content.textContent = "5";
  
    container.appendChild(content);
    }
}


const slider = document.querySelector("#slider");
const container = document.querySelector("#grid-container");
setDefaultValue();



slider.addEventListener("input", () => {
  const gridValue = document.querySelector(".slider-value");
  gridValue.textContent = `${slider.value} x ${slider.value}`;
  
  setGridTable(5);
});





