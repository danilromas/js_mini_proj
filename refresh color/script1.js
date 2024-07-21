const colorExample = document.getElementById("color-example");
const rgbCode = document.querySelector(".rgb");
const hexCode = document.querySelector(".hex");
const refreshColorBtn = document.getElementById("refresh-color");

function generateRandom(max){
    return Math.floor(Math.random() * (max + 1));
}

function generateRgbColor(max){
    const r = generateRandom(255);
    const g = generateRandom(255);
    const b = generateRandom(255);
    return [r,g,b];
}

function rgbToHex(rgb) {
    return "#" + rgb.map(color => color.toString(16)).join("").padStart(6,0); //преобразует rgb в hex
}

function SetColor(){
    const[r,g,b] = generateRgbColor();
    const hexColor = rgbToHex([r,g,b]);
    colorExample.style.backgroundColor = hexColor;
    rgbCode.textContent = `rgb(${r}, ${g}, ${b})`;
    hexCode.textContent = hexColor;
}

SetColor();

refreshColorBtn.addEventListener('click',SetColor)