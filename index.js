function changeOpa () {
    let element = document.getElementsByClassName("fadeIn")
    for (elements of element) {
        elements.classList.toggle("transformed-state");
    }
    center.classList.toggle("transformed-state");
}

window.onload = changeOpa()
