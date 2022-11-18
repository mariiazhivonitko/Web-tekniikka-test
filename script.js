let button = document.querySelector("button");
let buttonSize = 50;
let field=document.querySelector("usernsme");
button.style.width = buttonSize +"px"
let body = document.querySelector("body");
button.addEventListener("click", changeBackground);
button.addEventListener("mouseenter", mouseEnter);
button.addEventListener("mouseleave", mouseLeave);

button.addEventListener("click", showUsername);
function changeBackground(){
    body.classList.toggle("changed");
    buttonSize += 10;
    button.style.width = buttonSize + "px";
}
/* a. Muuta napin tekstin kieli, kun hiiri viedään sen päälle. Voit myös yrittää palauttaa kielen, kun hiiri viedään pois.*/

function mouseEnter(){
    button.textContent = "Paina minua";
}

function mouseLeave(){
    button.textContent = "Press me";
}
function showUsername(){
    let username = field.ariaValueMax;
    let h = document.createElement("h3");
    h.textContent = username;
    document.g

}
