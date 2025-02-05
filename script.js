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

    const resetButton = document.querySelector("#Reset");
    buttonsAll.appendChild(resetButton);
    resetButton.addEventListener("click", ()=> {
        
        grid.style.background = "white";

    })

    const colorbutton = document.querySelector("#Color");
    buttonsAll.appendChild(colorbutton);
    colorbutton.addEventListener("click", () =>{

        grid.addEventListener("mouseover", () => {
            let colors = ['red', 'blue', 'green', 'yellow', 'cyan', 'orange'];
            let new_color = colors[Math.floor(Math.random() * colors.length)];
            grid.style.background = new_color;
        })
    })

    const blackbutton = document.querySelector("#Black");
    buttonsAll.appendChild(blackbutton);
    blackbutton.addEventListener("click", ()=> {
        
        grid.addEventListener("mouseover", () => {

            grid.style.background = "black";
        })

    })

    }

}



