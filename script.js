let grids = 16;
let container = document.querySelector(".container");
let isMouseDown = false;
let userInput = document.querySelector("#grid");
let confirmButton = document.querySelector("#confirm");

let createGrids=()=>{
    for(let i=0;i<grids;i++){
        for(let j=0;j<grids;j++){
            let squareDiv = document.createElement("div");
            let heightWidth = 640/grids;
            squareDiv.style.width = `${heightWidth}px`;
            squareDiv.style.height = `${heightWidth}px`;
            container.append(squareDiv);
            squareDiv.addEventListener("mousedown",()=>{isMouseDown=true});
            squareDiv.addEventListener("mouseup",()=>{isMouseDown=false});
            squareDiv.addEventListener("mouseenter",draw);            
        }
    }
    console.log(isMouseDown)
};

let clearGrids=()=>{
    container.innerHTML="";
    grids=userInput.value;
    createGrids();
}

let draw=(e)=>{
    if(isMouseDown){
        e.currentTarget.style.backgroundColor="black";
    }    
};

createGrids();
confirmButton.addEventListener("click",clearGrids);