const container = document.querySelector("#container");
const erase = document.querySelector("#erase");
const draw = document.querySelector("#draw");
for (let i = 0; i < 256; i++) {
    container.appendChild(document.createElement("div"));
}


const squares = document.querySelectorAll("#container > div");
console.log(squares);


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

