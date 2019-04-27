// Forked from Pixelate project

const canvas = document.getElementById("canvas");

const generateCanvas = document.getElementById("generateCanvas");

const colorSelector = document.getElementById("colorSelector");

const icoRes = document.getElementById("resolutionSelector");

const floodCanvas = document.getElementById("floodCanvas");

const toolSelector = document.getElementById("tools");

const saveIco = document.getElementById("save");

const icoLib = document.getElementById("icoLib");

let painting = 0;

canvas.addEventListener("click", event => {
  if (event.target.tagName === "TD") {
    colorize(event.target);
  }
  // console.log(event.target);
  // console.log('click detected');
});

canvas.addEventListener("mouseover", event => {
  if (event.target.tagName === "TD" && painting === 1) {
    paint(event.target);
  }
  // console.log(event.target);
  // console.log('click detected');
});

document.addEventListener("mousedown", () => (painting = 1));

document.addEventListener("mouseup", () => (painting = 0));

generateCanvas.addEventListener("click", makeCanvas);

icoLib.addEventListener("click", icoLibFunc);

floodCanvas.addEventListener("click", floodCanvasFunc);

let cellArray = [];

function makeCanvas() {
  while (canvas.firstChild) {
    canvas.firstChild.remove();
    cellArray = [];
  }
  for (let i = 0; i < icoRes.value; i++) {
    let newRow = document.createElement("tr");
    cellArray.push([]);
    canvas.appendChild(newRow);
    for (let j = 0; j < icoRes.value; j++) {
      let newCell = document.createElement("td");
      newCell.neighbors = [];
      cellArray[i].push(newCell);
      newRow.appendChild(newCell);
    }
  }

  cellArray.forEach((cellRow, cellRowIndex) => {
    cellRow.forEach((cell, cellIndex) => {
      if (cellRowIndex > 0 && cellRowIndex < icoRes.value - 1) {
        cell.neighbors = [
          cellArray[cellRowIndex][cellIndex - 1],
          cellArray[cellRowIndex][cellIndex + 1],
          cellArray[cellRowIndex - 1][cellIndex],
          cellArray[cellRowIndex + 1][cellIndex]
        ];
      } else if (cellRowIndex === 0) {
        cell.neighbors = [
          cellArray[cellRowIndex][cellIndex - 1],
          cellArray[cellRowIndex][cellIndex + 1],
          cellArray[cellRowIndex + 1][cellIndex]
        ];
      } else if (cellRowIndex === icoRes.value - 1) {
        cell.neighbors = [
          cellArray[cellRowIndex][cellIndex - 1],
          cellArray[cellRowIndex][cellIndex + 1],
          cellArray[cellRowIndex - 1][cellIndex]
        ];
      }
      cell.neighbors.filter(k => k !== undefined);
      });
    });
}

function colorize(nodeToBeColored) {
  if (toolSelector.value === "paint") {
    if (nodeToBeColored.className === findColor()) {
      nodeToBeColored.classList.toggle(findColor());
    } else {
      nodeToBeColored.className = findColor();
    }
    // console.log('colorize ran');
    // console.log(nodeToBeColored.classList);
  } else if ((toolSelector.value = "fill")) {
    recursiveFloodArea(nodeToBeColored);
  }
}

function findColor() {
  const color = colorSelector.value;
  if(!(document.head.querySelector(`#${color.slice(1)}`))){ //check if we have generated this color class already
    // if we have not, let's generate it
    const colorClass = document.createElement("style");
    colorClass.type = "text/css";
    colorClass.innerHTML = `.${color.slice(1)} { background-color: ${color};}`;
    colorClass.id = `${color.slice(1)}`;
    document.head.append(colorClass);
  }//either way, return the name of the color class
  return color.slice(1);
}

function paint(nodeToBeColored) {
  nodeToBeColored.className = findColor();
  // console.log('colorize ran');
  // console.log(nodeToBeColored.classList);
}

function icoLibFunc() {

}

function floodCanvasFunc() {
  for (let i = 0; i < canvas.children.length; i++) {
    //console.log("i got to the first loop");
    for (let j = 0; j < canvas.children.item(i).children.length; j++) {
      //console.log("i got into the inner loop");
      let currColor = findColor();
      canvas.children.item(i).children.item(j).className = currColor;
    }
  }
}

function recursiveFloodArea(originNode) {//this is giving me problems
  let oldColor = originNode.className;
  console.log(originNode.neighbors);
  if (!(oldColor === findColor())) {
    colorize(originNode);
    originNode.neighbors
      .forEach(n => colorize(n));
  }
}
