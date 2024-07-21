const choiceInput = document.getElementById("choice-input");
const choicesContainer = document.getElementById("choices-container");
const addChoiceBtn = document.querySelector(".btn-add-choice");
const chooseBtn = document.querySelector(".btn-choose");
const clearBtn = document.querySelector(".btn-clear");

let choicesArr = [];
let highlightedChoiceIndex = 0;

function addChoice(){ //функция добавление
    if(!choiceInput.value) return; //не пускает пустой текст
    const choiceDiv = document.createElement("div"); //создает элемент div
    choiceDiv.className = "choice"; //подписывает его как сhoice
    choiceDiv.textContent = choiceInput.value; //добавляет в div наш написанный текст
    choiceInput.value = ""; //очищает инпут
    choicesContainer.appendChild(choiceDiv); // добавляет див в контейнер
    choicesArr.push(choiceDiv); //добавляет в массив
}

function highlightChoice(choiceIndex) { //смена цвета
    choicesArr[highlightedChoiceIndex]?.classList.remove("highlighted"); //удаляем подсвеченный элемент
    choicesArr[choiceIndex]?.classList.add("highlighted"); //добавляем
    highlightedChoiceIndex = choiceIndex; //записываем индекс элемента
}

function highlightRandomChoice() {
    const randChoiceIndex = Math.floor(Math.random() * choicesArr.length); //рандомим выбор элемента
    highlightChoice(randChoiceIndex);
}


function selectChoice() {
    if(choicesArr.length <= 1) return;
    const interval = setInterval(highlightRandomChoice, 150); //переключать каждые 150 миллисекунды
    setTimeout(() => clearInterval(interval), 5000); //длится 5 секунд
}

function deleteContainer(){
    choicesArr.forEach(choice => choice.remove()); // просто удаляет весь массив и всё введенное пользователем
    choicesArr.length = 0;
}


addChoiceBtn.addEventListener("click", addChoice);
chooseBtn.addEventListener("click", selectChoice);
clearBtn.addEventListener("click", deleteContainer);

