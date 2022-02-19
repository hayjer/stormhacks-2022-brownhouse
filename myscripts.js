function setSelectedGenre(element) {
    element = element.children[0];
    if (element.classList.contains("selected-genre"))
        element.classList.remove("selected-genre");
    else {
        if(document.getElementsByClassName("selected-genre").length >= 3)
            return;
        element.classList.add("selected-genre");
    }
}

function setSelectedDate(element) {
    element = element.children[0];
    if (element.classList.contains("selected-time"))
        element.classList.remove("selected-time");
    else {
        if(document.getElementsByClassName("selected-time").length >= 1)
            return;
        element.classList.add("selected-time");
    }
}

function sendRequest() {
    document.getElementsByClassName
    let genres = [];
    for(let i = 0; i < )
}