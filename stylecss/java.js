"strict";
console.clear();


const button = document.getElementById("bottone");
addEventListener('click', function change(){
    
    const img1 = document.getElementById("immage1");
    const img2 = document.getElementById("immage2");
    const bottone = document.getElementById("bottone")

    bottone.textContent = "spegni";
    img1.src =  "img/yellow_lamp.png";
    
})
