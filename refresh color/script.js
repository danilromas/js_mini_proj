const colorExample = document.getElementById("color-example"); // берем элемент color
const hexCode = document.querySelector(".hex"); // элемент //hex
const rgbCode = document.querySelector(".rgb"); // элемент rgb
const refreshColorBtn = document.getElementById("refresh-color"); //кнопку

function generateRandom(max) {
    return Math.floor(Math.random() * (max+1)); // рандомим момент
}

function generateRgbColor(max){
    const r = generateRandom(255); // до 255
    const g = generateRandom(255);
    const b = generateRandom(255);
    return[r, g, b]; // на выходе получаем массив
}

function rgbToHex(rgb) {
    return '#' + rgb.map(color => color.toString(16)).join('').padStart(6,0); //преобразует rgb в hex
}

function SetColor(){
    const [r,g,b] = generateRgbColor(); // получаем тут массив
    const hexColor = rgbToHex([r,g,b]); // преобразуем в hex
    colorExample.style.backgroundColor = hexColor; // этой штукой вкручиваем в бэк цвет через hex
    rgbCode.textContent = `rgb(${r}, ${g}, ${b})`; // этой штукой передаем в p класса textContent ргб 
    hexCode.textContent = hexColor; // тоже самое. но hex
}

SetColor();

refreshColorBtn.addEventListener("click", SetColor); //при клике срабатывает функция setColor