function setSelectedGenre(element) {
    element = element.children[0];
    if (element.classList.contains("selected-genre")) {
        element.classList.remove("selected-genre");
        if(!checkSelected()) {
            document.getElementById("continue").classList.add("disabled");
        }
    }
    else {
        if (document.getElementsByClassName("selected-genre").length >= 3)
            return;
        element.classList.add("selected-genre");
        if (checkSelected()) {
            document.getElementById("continue").classList.remove("disabled");
        }
    }
}

function checkSelected() {
    if (document.getElementsByClassName("selected-genre").length >= 1 &&
        document.getElementsByClassName("selected-time").length == 1) {
        return true;
    }
    return false;
}

function setSelectedDate(element) {
    element = element.children[0];
    if (element.classList.contains("selected-time")) {
        element.classList.remove("selected-time");
        if(!checkSelected()) {
            document.getElementById("continue").classList.add("disabled");
        }
    }
    else {
        if (document.getElementsByClassName("selected-time").length >= 1)
            return;
        element.classList.add("selected-time");
        if (checkSelected()) {
            document.getElementById("continue").classList.remove("disabled");
        }
    }
}

function copyToClipboard() {
    /* Get the text field */
    var copyText = document.getElementById("link");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
}

function sendRequest() {
    let genreElements = document.getElementsByClassName("selected-genre");
    let genres = [];
    for (let i = 0; i < genreElements.length; i++) {
        genres[i] = genreElements[i].innerHTML;
    }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("continue");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    let genreElements = document.getElementsByClassName("selected-genre");
    let releaseDateRange = document.getElementsByClassName("selected-time");
    if (genreElements.length == 0 || releaseDateRange.length == 0) {
        return;
    } else {
        modal.style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}