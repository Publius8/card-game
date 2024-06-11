let mainDiv = document.querySelector("#mainDiv");
let click = document.querySelector("#click");


let cardDatas = [
    { images: "./assets/images/4fL6iH4IkgJaEWQJpJ9AjsUXMmM-960.jpg", text: "Bentley Blue Train",id: 1, },
    { images: "./assets/images/1969-Ford-Mustang-Green-Featured-1.jpg", text: "Ford 1969",id: 2, },
    { images: "./assets/images/mercedes-benz-300-sl-coupe-w-198.jpg", text: "Mercedes 300sl",id: 3, },
    { images: "./assets/images/02-1.jpg", text: "Cadillac Fleetwood", id: 4, },
    { images: "./assets/images/singer-anglet-commission-porsche-911.jpg", text: "Porsche 911",id: 5, },
    { images: "./assets/images/a174a3c3686be9de3ef07593eaed453488f14a55.jpg", text: "Ferrari f40", id: 6,},
];

let tasks = [
    { task1: "Choose Bentley",id: 1, },
    { task1: "Choose Ford",id: 2, },
    { task1: "Choose Mercedes",id: 3, },
    { task1: "Choose Cadillac",id: 4, },
    { task1: "Choose Porsche",id: 5, },
    { task1: "Choose Ferrari",id: 6, },
];

function createCard(data) {
    return `
    <div class="cards" id="${data.id}" onclick="cardShow(this)">
    <div class="absolutus"></div>
      <img src="${data.images}">
      <h2>${data.text}</h2>
    </div>
  `;
}



let cardMax = 6;
let cardMin = 0;

let Extask = 0;
let clickCount = 0;

let head  = document.createElement("h2");


click.addEventListener("click", function () { 
    mainDiv.innerHTML = " ";  
    cardMin = 0;
    head.remove();

    let RandomCards = cardDatas.slice().sort(function () {
        return Math.random() - 0.5;
    });

    let RandomTask = tasks.slice().sort(function () {
        return Math.random() - 0.5;
    });

    let randomTaskIndex = Math.floor(Math.random() * RandomTask.length);
    let randomTask = RandomTask[randomTaskIndex];

    let taskElement = document.getElementById("task");
    taskElement.textContent = "Your task is: " + randomTask.task1;
    Extask = randomTask.id;

    for (let i = 0; i < cardMax; i++) {
        let a = RandomCards[i];  
        mainDiv.insertAdjacentHTML("beforeend", createCard(a));
    }

    cardMin = cardMin + cardMax;
    
});

function cardShow(obj) {
    let t = obj.id;
    //  alert(Extask + "\n" +  t);
    if (Extask == t) {
        obj.classList.remove("cards");
        obj.classList.add("cardsActive");
        clickCount++;
        let getPointHere = document.querySelector("#getPointHere");
        getPointHere.textContent = "Your score:" + " " + clickCount;
        head.textContent = "Press start to play";
        head.style.color = "red";
        head.style.fontSize = "30px";
        head.style.textAlign = "center";
        head.style.marginTop = "30px";
        document.body.appendChild(head);
    } else {
        // alert("Press start to play");
    }
}



