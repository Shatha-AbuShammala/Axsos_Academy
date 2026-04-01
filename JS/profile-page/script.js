function editProfile() {
    document.getElementById("profile-pic").src=  "./images/todd-s.jpg";
}

function acceptconnection(id) {
  removeconnection(id);
  var count = document.getElementById("connections").innerText;
  count = parseInt(count) + 1;
  document.getElementById("connections").innerText = count;
}

function removeconnection(id) {
  document.getElementById(id).remove()
  document.getElementById("Connection-req").innerText-=1

}


