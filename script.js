
createTable(16)
const squareList = document.querySelectorAll(".square");
squareList.forEach(
    function (square) {
        square.addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = "pink";
        });
    }
)


function createTable(size) {
    const container = document.querySelector(".container");
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