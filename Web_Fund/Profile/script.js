function editProfile() {
  var newName = prompt("Enter new name:");
  if (newName) {
    document.querySelector("#username").innerText = newName;
  }
}

function remove(element) {
  var row = element.closest(".user-row");
  row.remove();
}