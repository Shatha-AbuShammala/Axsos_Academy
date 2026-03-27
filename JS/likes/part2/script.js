var likes = { count1: 9, count2: 12, count3: 9 };
 
function addLike(id) {
  likes[id]++;
  document.querySelector("#" + id).innerText = likes[id];
}
