const container = document.querySelector("#container");


let gridSize = Number(prompt("Enter Grid Size"))

if (gridSize<2 || gridSize>100){
    alert("enter grid size betweeen 1 to 100")
}

else{

    for (i=0;i<gridSize*gridSize;i++){
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.style.height = `${360/gridSize}px` ; 
    grid.style.width = `${360/gridSize}px` ; 
    container.appendChild(grid);
    grid.addEventListener("mouseover", ()=> {
        
        grid.style.background = "black";

    })

    const resetButton = document.querySelector("#Reset");
    container.appendChild(resetButton);
    resetButton.addEventListener("click", ()=> {
        
        grid.style.background = "white";

    })

    }

}



