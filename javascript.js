const container = document.querySelector("#container");
for (let i = 0; i < 256; i++) {
    container.appendChild(document.createElement("div"));
}

const squares = document.querySelectorAll("#container > div");
console.log(squares);
