let element = document.getElementsByClassName("fadeIn")

function changeOpaIn() {
    //let element = document.getElementsByClassName("fadeIn")
    element[0].classList.toggle("transformed-state-in");
}

function changeOpaOut() {
    element[0].classList.toggle("transformed-state-out");
}

element[0].addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        changeOpaOut();
    };
});


window.onload = changeOpaIn()

// timeout function --- setTimeout(function i want to run, time in miliseconds ex 3000);