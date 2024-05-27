
createTable(16);
addHoverEvent();

const resetButton = document.querySelector(".button-container button");
resetButton.addEventListener("click", function () {
    let gridSize;
    while (true) {
        gridSize = Number(prompt("Enter grid size:"));
        console.log(gridSize);
        if (Number.isNaN(gridSize)) {
            alert("Invalid size!");
        }
        else {
            createTable(gridSize);
            addHoverEvent();
            break;
        }
    }
});


function createTable(size) {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    for (let i = 0; i < size; i++) {
        let row = createRow(size);
        container.appendChild(row);
    }
}

function createRow(length) {
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("row-container");
    for (let i = 0; i < length; i++) {
        let square = createSquare();
        rowContainer.appendChild(square);
    }
    return rowContainer;
}

function createSquare(squareWidth) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    squareDiv.style.borderStyle = "solid";
    squareDiv.style.borderColor = "black";
    squareDiv.style.borderWidth = "1px";
    return squareDiv;
}

function addHoverEvent() {
    const squareList = document.querySelectorAll(".square");
    squareList.forEach(
        function (square) {
            square.addEventListener("mouseover", function (e) {
                e.target.style.backgroundColor = "pink";
            });
        }
    )
}