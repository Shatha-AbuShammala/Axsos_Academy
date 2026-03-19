function login(elem) {
    if (elem.innerText === "Login") {
        elem.innerText = "Logout";
        elem.style.backgroundColor="red";
    } else {
        elem.innerText = "Login";
        elem.style.backgroundColor="green";
    }
}
function removeButton(elem) {
    elem.remove();
}
