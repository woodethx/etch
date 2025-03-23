const container = document.querySelector("#container");
const erase = document.querySelector("#erase");
const draw = document.querySelector("#draw");
const gridSize = document.querySelector("#gridSize");

for (let i = 0; i < 256; i++) {
    container.appendChild(document.createElement("div"));
}

function createGrid(size){
    container.innerHTML = "";
    for (let i = 0; i < size * size; i++) {
        container.appendChild(document.createElement("div"));
    }
}
function addListeners(){
    let squares = document.querySelectorAll("#container > div");
    draw.addEventListener("click", () =>{
        squares.forEach(div => {
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = "black";
            })
        })
        });
        erase.addEventListener("click", () =>{
            squares.forEach(div => {
                div.addEventListener("mouseover", () => {
                    div.style.backgroundColor = "white";
                })
            })
        });
}
addListeners();

gridSize.addEventListener("click", () => {
    let choice = prompt("How many squares per side?");
    if (!choice || choice < 1 || choice > 100) return;
    container.style.setProperty("--sides", choice);
    createGrid(choice);
    addListeners();
});