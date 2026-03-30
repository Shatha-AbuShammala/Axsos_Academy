function editProfile() {
    var name = prompt ("Enter your name:");
  if (name) {
    document.getElementById("profile-name").innerHTML = name;
}    
}   

function acceptconnection(id) {
  document.getElementById(id).remove()
  document.getElementById("Connection-req").innerText-=1
  var count = document.getElementById("connections").innerText;
  count = parseInt(count) + 1;
  document.getElementById("connections").innerText = count;
}

function removeconnection(id) {
  document.getElementById(id).remove()
  document.getElementById("Connection-req").innerText-=1
  var count = document.getElementById("connections").innerText;
  count = parseInt(count) - 1;
  document.getElementById("connections").innerText = count;
}


