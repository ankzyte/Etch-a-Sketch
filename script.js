let grids = 16;
let container = document.querySelector(".container");

let createGrids=()=>{
    for(let i=0;i<grids;i++){
        for(let j=0;j<grids;j++){
            let squareDiv = document.createElement("div");
            let heightWidth = 640/grids;
            squareDiv.style.width = `${heightWidth} px`;
            squareDiv.style.height = `${heightWidth} px`;
            container.append(squareDiv);
        }
    }
};

createGrids();