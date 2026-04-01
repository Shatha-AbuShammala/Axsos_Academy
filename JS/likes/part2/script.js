var likes = { count1: 9, count2: 12, count3: 9 };
 
function addLike(id,buttonId) {
  likes[id]++;
  document.querySelector("#" + id).innerText = likes[id];
  document.getElementById(buttonId).style.backgroundColor = "blue";
}

