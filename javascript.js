var grown = true;
var box = document.getElementById("box");
var colored = false;

document.getElementById("button1").addEventListener("click" , function(){    
    if(grown){
        box.style.height = "300px";
        box.style.width = "300px";
        grown = false;
        document.getElementById("button1").innerText = "Go Small";
    }
    else{
        box.style.height = "150px";
        box.style.width = "150px";
        grown = true;
        document.getElementById("button1").innerText = "Go Big";
    }  
})

document.getElementById("button2").addEventListener("click" , function(){
    if(!colored){
        box.style.backgroundColor = "blue";
        document.getElementById("button2").innerText = "Go Orange";
        colored = true;
    }
    else{
        box.style.backgroundColor = "orange";
        document.getElementById("button2").innerText = "Go Blue";
        colored = false;
    }
})

document.getElementById("button3").addEventListener("click" , function(){
    box.style.opacity = 0;
})

document.getElementById("button4").addEventListener("click" , function(){
    box.style.height = "150px";
    box.style.width = "150px";
    box.style.backgroundColor = "orange";
    box.style.opacity = 1;
})