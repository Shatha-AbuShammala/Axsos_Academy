function login(elem) {
    if (elem.innerText === "Login") {
        elem.innerText = "Logout";
    } else {
        elem.innerText = "Login";
    }
}
function removeButton(elem) {
    elem.remove();
}
