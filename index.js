let element = document.getElementsByClassName("fadeIn");
let change = document.getElementById("change");
let inputText = document.getElementById("ask-name");
let projects = document.getElementsByClassName("project-container");
let personName;

function changeOpaIn() {
    //let element = document.getElementsByClassName("fadeIn")
    element[0].classList.add("transformed-state-in");
}

function changeOpaOut() {
    element[0].classList.remove("transformed-state-in");
}

function changeProjOpa() {
    projects[0].classList.add("transformed-state-in");
    projects[1].classList.add("transformed-state-in");
}

function changeReappear (personName) {
    change.innerText = "Welcome to my website" + " " + personName;
    element[0].classList.add("transformed-state-in");
    setTimeout(changeOpaOut, 3000);
    setTimeout(changeProjOpa, 4500);
}

function deleteFade() {
    inputText.remove();
}

element[0].addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        changeOpaOut();
        personName = document.getElementById("ask-name").value;
        deleteFade();
        //change.innerText = personName;
        //alert(personName)
        setTimeout(function() {changeReappear(personName);}, 3500);
    };
});


window.onload = changeOpaIn();

// timeout function --- setTimeout(function i want to run, time in miliseconds ex 3000);