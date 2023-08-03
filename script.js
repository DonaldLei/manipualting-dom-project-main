let screenDisplayP = document.getElementById("p-div");
let screenDisplayImg = document.getElementById("img-div");
let buttonAddP = document.getElementById("p-button");
let buttonAddImg = document.getElementById("img-button");


buttonAddP.onclick = function(){
    
    const addP = document.createElement("p");
    addP.innerText = "I am Donald";
    addP.style.color = "white";
    addP.style.backgroundColor = "black";
    screenDisplayP.style.display = "inline-block";
    screenDisplayImg.style.display = "none"
    screenDisplayP.appendChild(addP);
}


buttonAddImg.onclick = function(){
    const addImg = document.createElement("img");
    addImg.src="emoji-wave.png";
    addImg.height=100;
    addImg.width=100;
    screenDisplayImg.style.display = "inline-block";
    screenDisplayImg.appendChild(addImg);
    screenDisplayP.style.display = "none";
}