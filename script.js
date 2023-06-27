
function colorChangeEnter(a){

    a.style.backgroundColor = "black";
}
function colorChangeLeave(a){
    a.style.backgroundColor = "aqua";
}

const grid_Container = document.querySelector(".grid_Container");
const grid_block = document.querySelector(".grid_block")
const b1 = document.querySelector("#b1")


for(let i =0;i < 16*16; i++){

    const a = document.createElement('div');
    
    a.className = "grid_block";
 
    a.addEventListener('mouseover', function(){
        colorChangeEnter(a)
     });

    grid_Container.appendChild(a);

}
function changeGrid(b){
    
    while(grid_Container.firstChild){
        grid_Container.removeChild(grid_Container.firstChild)
    }
    
    
    for(let i =0;i < b*b; i++){

        const a = document.createElement('div');
       
        a.className = "grid_block";

        a.style.width = (400 / b) + "px"; 
        a.style.height = (400 / b) + "px";
        
        a.addEventListener('mouseover', function(){
            colorChangeEnter(a)
         });
 
        grid_Container.appendChild(a);
    
    }
    
}
function thing(){
    let b = prompt("how many grid?");
    while(b >100){
         b = prompt("Too many grids, how many grid?");
    }
    while(!(b % 2 === 0)){
        b = prompt("has to be divisble by 2");
    }
    changeGrid(b);
    
}




b1.addEventListener('click',function(){
    thing()
});

